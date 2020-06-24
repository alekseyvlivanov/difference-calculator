run: gendiff

gendiff:
	node bin/gendiff.js

install:
	npm install

lint:
	npx eslint .

publish:
	npm publish --dry-run
