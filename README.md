# Hexlet

## Frontend JavaScript

### Project #2: Difference calculator

[![Node CI](https://github.com/alekseyvlivanov/frontend-project-lvl2/workflows/Node%20CI/badge.svg)](https://github.com/alekseyvlivanov/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/89bb011f2bdc5356acfa/maintainability)](https://codeclimate.com/github/alekseyvlivanov/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/89bb011f2bdc5356acfa/test_coverage)](https://codeclimate.com/github/alekseyvlivanov/frontend-project-lvl2/test_coverage)

##

CLI utility to find the differences between config files.

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
