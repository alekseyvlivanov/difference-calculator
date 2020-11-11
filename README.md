# Difference Calculator

## Overview

CLI utility to find the difference between two config files.

[![Node CI](https://github.com/alekseyvlivanov/difference-calculator/workflows/Node%20CI/badge.svg)](https://github.com/alekseyvlivanov/difference-calculator/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/d93b7e06d2fe0696739c/maintainability)](https://codeclimate.com/github/alekseyvlivanov/difference-calculator/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d93b7e06d2fe0696739c/test_coverage)](https://codeclimate.com/github/alekseyvlivanov/difference-calculator/test_coverage)

## Features

- local install as npm package
- package can be used as a library:

  ```
  import genDiff from 'difference-calculator'

  const diff = genDiff(filepath1, filepath2);
  console.log(diff);
  ```

- using [Makefile](https://makefile.site) for better command management
- TDD with Jest
- different input formats (detects by extension): ini, json, y(a)ml
- generates report in plain text, json or "stylish"
- simple and complex (nested) objects comparision

## Dependencies

- [Commander.js](https://github.com/tj/commander.js) for building command-line interface
- [ini](https://github.com/npm/ini) for parsing ini files
- [JS-YAML](https://github.com/nodeca/js-yaml) for parsing y(a)ml files
- some functions from [Lodash](https://github.com/lodash/lodash) to simplify objects comparision

## Install

```
$ git clone ...
$ cd difference-calculator
$ make install
$ make publish
$ npm link
```

## Usage

#### Getting help

```
$ gendiff -h
```

| Option                | Description               |
| :-------------------- | ------------------------- |
| _-V, --version_       | output the version number |
| _-f, --format [type]_ | output format             |
| _-h, --help_          | output usage information  |

#### Two simple **json** files:

```
$ cat "./before.json"
{
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
}
```

```
$ cat "./after.json"
{
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
}
```

```
$ gendiff "./before.json" "./after.json"
{
 + timeout: 20
 - timeout: 50
 + verbose: true
   host: hexlet.io
 - proxy: 123.234.53.22
 - follow: false
}
```

## Asciinema examples:

#### genDiff example for INI files

<a href="https://asciinema.org/a/SFLkBwLlgoM6OyTe4Cex9y8ni" target="_blank"><img src="https://asciinema.org/a/SFLkBwLlgoM6OyTe4Cex9y8ni.svg" width="400px" /></a>

#### genDiff example for JSON files

<a href="https://asciinema.org/a/dsF3MurSVVlgXTgRATi79ID7k" target="_blank"><img src="https://asciinema.org/a/dsF3MurSVVlgXTgRATi79ID7k.svg" width="400px" /></a>

#### genDiff example for YAML files

<a href="https://asciinema.org/a/OmhOSm1fQnmQfucwGwOQwYXH0" target="_blank"><img src="https://asciinema.org/a/OmhOSm1fQnmQfucwGwOQwYXH0.svg" width="400px" /></a>

#### genDiff example for complex (nested) objects

<a href="https://asciinema.org/a/0HIlZIKLKtwPSD2rPlwOd8ro3" target="_blank"><img src="https://asciinema.org/a/0HIlZIKLKtwPSD2rPlwOd8ro3.svg" width="400px" /></a>

#### genDiff example with plain text formatter

<a href="https://asciinema.org/a/oVdqliPfIvBzyGrJ7kZHE3KUK" target="_blank"><img src="https://asciinema.org/a/oVdqliPfIvBzyGrJ7kZHE3KUK.svg" width="400px" /></a>

#### genDiff example with json text formatter and running all tests

<a href="https://asciinema.org/a/5lriewRoPgCdqKiN4kFGZZIn2" target="_blank"><img src="https://asciinema.org/a/5lriewRoPgCdqKiN4kFGZZIn2.svg" width="400px" /></a>
