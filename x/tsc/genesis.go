package tsc

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/thenalab/tsc/x/tsc/keeper"
	"github.com/thenalab/tsc/x/tsc/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined
	if genState.NextNFT != nil {
		k.SetNextNFT(ctx, *genState.NextNFT)
	}
	// Set all the storedNFT
	for _, elem := range genState.StoredNFTList {
		k.SetStoredNFT(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	// Get all nextNFT
	nextNFT, found := k.GetNextNFT(ctx)
	if found {
		genesis.NextNFT = &nextNFT
	}
	genesis.StoredNFTList = k.GetAllStoredNFT(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
