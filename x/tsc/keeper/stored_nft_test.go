package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "github.com/thenalab/tsc/testutil/keeper"
	"github.com/thenalab/tsc/testutil/nullify"
	"github.com/thenalab/tsc/x/tsc/keeper"
	"github.com/thenalab/tsc/x/tsc/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNStoredNFT(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.StoredNFT {
	items := make([]types.StoredNFT, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetStoredNFT(ctx, items[i])
	}
	return items
}

func TestStoredNFTGet(t *testing.T) {
	keeper, ctx := keepertest.TscKeeper(t)
	items := createNStoredNFT(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetStoredNFT(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestStoredNFTRemove(t *testing.T) {
	keeper, ctx := keepertest.TscKeeper(t)
	items := createNStoredNFT(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveStoredNFT(ctx,
			item.Index,
		)
		_, found := keeper.GetStoredNFT(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestStoredNFTGetAll(t *testing.T) {
	keeper, ctx := keepertest.TscKeeper(t)
	items := createNStoredNFT(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllStoredNFT(ctx)),
	)
}
