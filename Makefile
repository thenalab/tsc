PACKAGES=$(shell go list ./... | grep -v '/simulation')

VERSION := v0.2.2-dev
COMMIT := $(shell git log -1 --format='%H')

ldflags = -X github.com/cosmos/cosmos-sdk/version.Name=tsc \
	-X github.com/cosmos/cosmos-sdk/version.ServerName=tscd \
	-X github.com/cosmos/cosmos-sdk/version.Version=$(VERSION) \
	-X github.com/cosmos/cosmos-sdk/version.Commit=$(COMMIT)

BUILD_FLAGS := -ldflags '$(ldflags)'

all: build install

install: go.sum
	@echo "--> Installing tscd"
	@go install -mod=readonly $(BUILD_FLAGS) ./cmd/tscd

build: go.sum
	@echo "--> Build tscd"
	@go build -mod=readonly $(BUILD_FLAGS) ./cmd/tscd

go.sum: go.mod
	@echo "--> Ensure dependencies have not been modified"
	GO111MODULE=on go mod verify

test:
	@go test -mod=readonly $(PACKAGES)
