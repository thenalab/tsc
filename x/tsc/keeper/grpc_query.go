package keeper

import (
	"github.com/thenalab/tsc/x/tsc/types"
)

var _ types.QueryServer = Keeper{}
