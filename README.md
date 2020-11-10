# Hexlet

## Frontend JavaScript

### Project #2: Difference calculator

[![Node CI](https://github.com/alekseyvlivanov/difference-calculator/workflows/Node%20CI/badge.svg)](https://github.com/alekseyvlivanov/difference-calculator/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/d93b7e06d2fe0696739c/maintainability)](https://codeclimate.com/github/alekseyvlivanov/difference-calculator/maintainability)

##

CLI utility to find the difference between two config files.

#### Install

1. Clone or download repository
2. Run `make install` to download required packages

#### Usage

```bash
$ gendiff -h
```

| Option                | Description               |
| :-------------------- | ------------------------- |
| _-V, --version_       | output the version number |
| _-f, --format [type]_ | output format             |
| _-h, --help_          | output usage information  |

**Usage example:**

```bash
$ cat "./before.json"
{
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
}
```

```bash
$ cat "./after.json"
{
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
}
```

```bash
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

**Asciinema demo:**

genDiff example for INI files

[![asciicast](https://asciinema.org/a/SFLkBwLlgoM6OyTe4Cex9y8ni.svg)](https://asciinema.org/a/SFLkBwLlgoM6OyTe4Cex9y8ni)

genDiff example for JSON files

[![asciicast](https://asciinema.org/a/dsF3MurSVVlgXTgRATi79ID7k.svg)](https://asciinema.org/a/dsF3MurSVVlgXTgRATi79ID7k)

genDiff example for YAML files

[![asciicast](https://asciinema.org/a/OmhOSm1fQnmQfucwGwOQwYXH0.svg)](https://asciinema.org/a/OmhOSm1fQnmQfucwGwOQwYXH0)

genDiff example for complex (nested) objects

[![asciicast](https://asciinema.org/a/0HIlZIKLKtwPSD2rPlwOd8ro3.svg)](https://asciinema.org/a/0HIlZIKLKtwPSD2rPlwOd8ro3)

genDiff example with plain text formatter

[![asciicast](https://asciinema.org/a/oVdqliPfIvBzyGrJ7kZHE3KUK.svg)](https://asciinema.org/a/oVdqliPfIvBzyGrJ7kZHE3KUK)

genDiff example with json text formatter and running all tests

[![asciicast](https://asciinema.org/a/5lriewRoPgCdqKiN4kFGZZIn2.svg)](https://asciinema.org/a/5lriewRoPgCdqKiN4kFGZZIn2)
