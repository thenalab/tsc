package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		NextNFT:       nil,
		StoredNFTList: []StoredNFT{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in storedNFT
	storedNFTIndexMap := make(map[string]struct{})

	for _, elem := range gs.StoredNFTList {
		index := string(StoredNFTKey(elem.Index))
		if _, ok := storedNFTIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for storedNFT")
		}
		storedNFTIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
