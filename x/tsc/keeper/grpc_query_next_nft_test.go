package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/thenalab/tsc/testutil/keeper"
	"github.com/thenalab/tsc/testutil/nullify"
	"github.com/thenalab/tsc/x/tsc/types"
)

func TestNextNFTQuery(t *testing.T) {
	keeper, ctx := keepertest.TscKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestNextNFT(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetNextNFTRequest
		response *types.QueryGetNextNFTResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetNextNFTRequest{},
			response: &types.QueryGetNextNFTResponse{NextNFT: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.NextNFT(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}
