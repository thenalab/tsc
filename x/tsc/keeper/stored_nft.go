package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/thenalab/tsc/x/tsc/types"
)

// SetStoredNFT set a specific storedNFT in the store from its index
func (k Keeper) SetStoredNFT(ctx sdk.Context, storedNFT types.StoredNFT) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredNFTKeyPrefix))
	b := k.cdc.MustMarshal(&storedNFT)
	store.Set(types.StoredNFTKey(
		storedNFT.Index,
	), b)
}

// GetStoredNFT returns a storedNFT from its index
func (k Keeper) GetStoredNFT(
	ctx sdk.Context,
	index string,

) (val types.StoredNFT, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredNFTKeyPrefix))

	b := store.Get(types.StoredNFTKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveStoredNFT removes a storedNFT from the store
func (k Keeper) RemoveStoredNFT(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredNFTKeyPrefix))
	store.Delete(types.StoredNFTKey(
		index,
	))
}

// GetAllStoredNFT returns all storedNFT
func (k Keeper) GetAllStoredNFT(ctx sdk.Context) (list []types.StoredNFT) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredNFTKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.StoredNFT
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
