#!make

# Makefile for Demo Auth Serve
SHELL := /bin/sh


#export BUILD = $(shell git describe --always)-$(shell date +%Y%m%d%H%M%S)
export TAG = $(shell git describe --abbrev=0 --tags)
#BRANCH = $(shell git branch --show-current)
#export VERSION ?= $(shell git describe --always)
export VERSION ?= latest
export MAKEFILE_LIST=Makefile

$(info version = $(VERSION))


help: ## display this help screen
	@grep -h -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'


install: ## install all dependencies, propagating from root
	@pnpm install

install-offline: ## install all dependencies, propagating from root
	@pnpm install --offline

build: ## build all packages, propagating from root
	@pnpm build

format: ## format the whole project
	@pnpm format

lint: ## lint the whole project
	@pnpm lint

merge-coverage: ## merge all packages coverage filles into one to publish
	@pnpm coverage:merge

dev: ## dev mode with watch option
	@sleep 3
	@NODE_ENV=development pnpm dev --filter app-react

start: ## start all at once using docker compose
	@sleep 3
	@NODE_ENV=development pnpm start

clean: ## clean and delete all node_modules
	@pnpm clean
	@find . -name 'coverage' -exec rm -fr {} \;
	@find . -name 'dist' -exec rm -fr {} \;
	@find . -name 'node_modules' -exec rm -fr {} \;

clean-test: ## clean and run install build test
	@find . -name 'coverage' -exec rm -fr {} \;
	@pnpm build
	@pnpm lint
	@pnpm test:unit
	@pnpm test:features
	@pnpm test:smoke
	@pnpm test:e2e
	@pnpm coverage:merge

test: ## run all test
	@pnpm test:unit
	@pnpm test:features
	@pnpm test:smoke
	@pnpm test:e2e
	@pnpm coverage:merge

test-unit: ## unit test on all packages, propagating from root
	@pnpm test:unit

test-features: ## features test on all package, propagating from root
	@pnpm test:features

test-e2e: ## e2e test on all package, propagating from root
	@pnpm test:e2e

test-smoke: ## smoke test on all package, propagating from root
	@pnpm test:smoke

install-jest:
	@pnpm remove --parallel jest ts-jest \
		--filter app-job \
		--filter logger \
		--filter keyclaod-client \
		--filter redis-client
	@pnpm install --parallel --save-dev jest@29 ts-jest@29 \
		--filter app-job \
		--filter logger \
		--filter keyclaod-client \
		--filter redis-client

install-app-react:
	@pnpm install --save-dev \
		@craco/craco \
		tsconfig-paths-webpack-plugin \
		--filter app-react
	@pnpm install \
		@react-oauth/google@latest \
		axios \
		react-code-blocks \
		--filter app-react

install-mui-joy:
	@pnpm install \
		zxcvbn-typescript \
		@mui/joy @mui/icons-material @mui/material @emotion/react @emotion/styled \
		--filter react-mui-joy

