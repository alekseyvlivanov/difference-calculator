install: install-deps

install-deps:
	npm ci

run: gendiff

gendiff:
	node bin/gendiff.js

test:
	npm test -- --watch

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish --dry-run

.PHONY: test