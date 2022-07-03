package keeper

import (
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	mintkeeper "github.com/cosmos/cosmos-sdk/x/mint/keeper"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	custommint "github.com/thenalab/tsc/x/mint/types"
)

// Keeper of the mint store
type Keeper struct {
	mintkeeper.Keeper

	bankKeeper    custommint.BankKeeper
	stakingKeeper custommint.StakingKeeper
	tscKeeper     custommint.TSCKeeper
}

// NewKeeper creates a new mint Keeper instance
func NewKeeper(
	cdc codec.BinaryCodec, key sdk.StoreKey, paramSpace paramtypes.Subspace,
	sk custommint.StakingKeeper, ak custommint.AccountKeeper, bk custommint.BankKeeper,
	auraKeeper custommint.TSCKeeper, feeCollectorName string,
) Keeper {
	return Keeper{
		Keeper:        mintkeeper.NewKeeper(cdc, key, paramSpace, sk, ak, bk, feeCollectorName),
		bankKeeper:    bk,
		stakingKeeper: sk,
		tscKeeper:     auraKeeper,
	}
}

func (k Keeper) GetSupply(ctx sdk.Context, denom string) sdk.Int {
	return k.bankKeeper.GetSupply(ctx, denom).Amount
}

func (k Keeper) GetMaxSupply(ctx sdk.Context) string {
	return k.tscKeeper.GetMaxSupply(ctx)
}

//func (k Keeper) GetExcludeCirculatingAddr(ctx sdk.Context) []sdk.AccAddress {
//	return k.tscKeeper.GetExcludeCirculatingAddr(ctx)
//}

//func (k Keeper) GetExcludeCirculatingAmount(ctx sdk.Context, denom string) sdk.Coin {
//	excludeAddrs := k.tscKeeper.GetExcludeCirculatingAddr(ctx)
//	excludeAmount := sdk.NewInt64Coin(denom, 0)
//	for _, addr := range excludeAddrs {
//		k.Logger(ctx).Info("GetExcludeCirculatingAmount", "addr", addr.String())
//		amount := k.bankKeeper.GetBalance(ctx, addr, denom)
//		k.Logger(ctx).Info("GetExcludeCirculatingAmount", "amount", amount.Amount)
//		k.Logger(ctx).Info("GetExcludeCirculatingAmount", "amountString", amount.String())
//		excludeAmount = excludeAmount.Add(amount)
//		k.Logger(ctx).Info("GetExcludeCirculatingAmount", "excludeAmount", excludeAmount.String())
//	}
//	return excludeAmount
//}

func (k Keeper) GetExcludeCirculatingAmount(ctx sdk.Context, denom string) sdk.Coin {
	return k.bankKeeper.GetExcludeCirculatingAmount(ctx, denom)
}

// CustomStakingTokenSupply implements an alias call to the underlying staking keeper's
// CustomStakingTokenSupply to be used in BeginBlocker.
func (k Keeper) CustomStakingTokenSupply(ctx sdk.Context, excludeAmount sdk.Int) sdk.Int {
	return k.stakingKeeper.StakingTokenSupply(ctx).Sub(excludeAmount)
}

// CustomBondedRatio implements an alias call to the underlying staking keeper's
// CustomBondedRatio to be used in BeginBlocker.
func (k Keeper) CustomBondedRatio(ctx sdk.Context, excludeAmount sdk.Int) sdk.Dec {
	stakeSupply := k.CustomStakingTokenSupply(ctx, excludeAmount)
	if stakeSupply.IsPositive() {
		return k.stakingKeeper.TotalBondedTokens(ctx).ToDec().QuoInt(stakeSupply)
	}

	return sdk.ZeroDec()
}
