package tsc_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/thenalab/tsc/testutil/keeper"
	"github.com/thenalab/tsc/testutil/nullify"
	"github.com/thenalab/tsc/x/tsc"
	"github.com/thenalab/tsc/x/tsc/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TscKeeper(t)
	tsc.InitGenesis(ctx, *k, genesisState)
	got := tsc.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
