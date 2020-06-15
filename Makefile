
.PHONY: list

# "hidden" targets
.lock-file: .project-file
	pnpm install # --shamefully-hoist

.project-file: package.json
	test ! -f package.json && pnpm init || exit 0


_defaultTargetIsTheFirstNonDotTarget: list

build-dev:
	pnpx webpack --env=development

coverage:
	pnpx jest --coverage

developing:
	pnpx webpack-dev-server --env=development --watch-poll

install:
	@pnpm install --global \
		pnpm \
	&& pnpm install --no-lockfile --save-dev \
		@types/jest \
		@typescript-eslint/parser \
		@typescript-eslint/eslint-plugin \
		autoprefixer \
		css-loader \
		elix \
		eslint \
		html-webpack-plugin \
		jest \
		mini-css-extract-plugin \
		normalize-path \
		postcss-loader \
		sass \
		sass-loader \
		style-loader \
		ts-jest \
		ts-loader \
		typescript \
		webpack \
		webpack-cli \
		webpack-dev-server \
		webpack-merge \
	&& pnpm install --no-lockfile \
		@webcomponents/webcomponentsjs

lint:
	pnpx eslint . --ext .ts

list:
	@$(MAKE) -pRrq -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null \
		| awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' \
		| egrep -v -e '^[^[:alnum:]]' -e '^$@$$' \
		| xargs -0 echo 'Available targets in Makefile:' | tr '\n' ' ' && echo
#@grep -oP '^([^#[:space:]].*):' Makefile | cut -d":" -f1
#cat Makefile | sed -n -e 's/^([a-zA-Z][^#:[:space:]]*):/\1/p'
#@grep -oP '^([^#[:space:]].*):' Makefile

produce: .lock-file
	pnpx webpack-dev-server --env=production --watch-poll

release: .lock-file
	pnpx webpack --env=production

test:
	pnpx jest

watch: .lock-file
	pnpx webpack --env=production --watch-poll


