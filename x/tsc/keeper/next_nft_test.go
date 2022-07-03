package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/thenalab/tsc/testutil/keeper"
	"github.com/thenalab/tsc/testutil/nullify"
	"github.com/thenalab/tsc/x/tsc/keeper"
	"github.com/thenalab/tsc/x/tsc/types"
)

func createTestNextNFT(keeper *keeper.Keeper, ctx sdk.Context) types.NextNFT {
	item := types.NextNFT{}
	keeper.SetNextNFT(ctx, item)
	return item
}

func TestNextNFTGet(t *testing.T) {
	keeper, ctx := keepertest.TscKeeper(t)
	item := createTestNextNFT(keeper, ctx)
	rst, found := keeper.GetNextNFT(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestNextNFTRemove(t *testing.T) {
	keeper, ctx := keepertest.TscKeeper(t)
	createTestNextNFT(keeper, ctx)
	keeper.RemoveNextNFT(ctx)
	_, found := keeper.GetNextNFT(ctx)
	require.False(t, found)
}
