package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "github.com/thenalab/tsc/testutil/keeper"
	"github.com/thenalab/tsc/x/tsc/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.TscKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
