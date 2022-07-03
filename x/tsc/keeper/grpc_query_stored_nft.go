package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/thenalab/tsc/x/tsc/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) StoredNFTAll(c context.Context, req *types.QueryAllStoredNFTRequest) (*types.QueryAllStoredNFTResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var storedNFTs []types.StoredNFT
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	storedNFTStore := prefix.NewStore(store, types.KeyPrefix(types.StoredNFTKeyPrefix))

	pageRes, err := query.Paginate(storedNFTStore, req.Pagination, func(key []byte, value []byte) error {
		var storedNFT types.StoredNFT
		if err := k.cdc.Unmarshal(value, &storedNFT); err != nil {
			return err
		}

		storedNFTs = append(storedNFTs, storedNFT)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllStoredNFTResponse{StoredNFT: storedNFTs, Pagination: pageRes}, nil
}

func (k Keeper) StoredNFT(c context.Context, req *types.QueryGetStoredNFTRequest) (*types.QueryGetStoredNFTResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetStoredNFT(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetStoredNFTResponse{StoredNFT: val}, nil
}
