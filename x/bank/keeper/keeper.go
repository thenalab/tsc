package keeper

import (
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/bank/keeper"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"github.com/thenalab/tsc/x/bank/types"
)

var ExcludeDenom = "utsc"

type BaseKeeper struct {
	keeper.BaseKeeper

	tscKeeper types.TSCKeeper
}

func NewBaseKeeper(
	cdc codec.BinaryCodec,
	storeKey sdk.StoreKey,
	ak types.AccountKeeper,
	paramSpace paramtypes.Subspace,
	blockedAddrs map[string]bool,
	tscKeeper types.TSCKeeper,
) BaseKeeper {
	return BaseKeeper{
		BaseKeeper: keeper.NewBaseKeeper(cdc, storeKey, ak, paramSpace, blockedAddrs),
		tscKeeper: tscKeeper,
	}
}

func (k BaseKeeper) GetExcludeCirculatingAmount(ctx sdk.Context, denom string) sdk.Coin {
	excludeAddrs := k.tscKeeper.GetExcludeCirculatingAddr(ctx)
	excludeAmount := sdk.NewInt64Coin(denom, 0)
	for _, addr := range excludeAddrs {
		amount := k.BaseKeeper.GetBalance(ctx, addr, denom)
		excludeAmount = excludeAmount.Add(amount)
	}

	return excludeAmount
}

func (k BaseKeeper) GetExcludeDenom() string {
	return ExcludeDenom
}
