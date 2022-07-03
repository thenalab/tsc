package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// StoredNFTKeyPrefix is the prefix to retrieve all StoredNFT
	StoredNFTKeyPrefix = "StoredNFT/value/"
)

// StoredNFTKey returns the store key to retrieve a StoredNFT from the index fields
func StoredNFTKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
