package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/thenalab/tsc/x/tsc/types"
)

// SetNextNFT set nextNFT in the store
func (k Keeper) SetNextNFT(ctx sdk.Context, nextNFT types.NextNFT) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NextNFTKey))
	b := k.cdc.MustMarshal(&nextNFT)
	store.Set([]byte{0}, b)
}

// GetNextNFT returns nextNFT
func (k Keeper) GetNextNFT(ctx sdk.Context) (val types.NextNFT, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NextNFTKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveNextNFT removes nextNFT from the store
func (k Keeper) RemoveNextNFT(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NextNFTKey))
	store.Delete([]byte{0})
}
