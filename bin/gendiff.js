#!/usr/bin/env node

import program from 'commander';
import genDiff from '../src/index.js';

// TODO - get version from package.json with webpack?

program
  .version('1.2.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .action((filePath1, filePath2) => console.log(genDiff(filePath1, filePath2)))
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format')
  .parse(process.argv);
