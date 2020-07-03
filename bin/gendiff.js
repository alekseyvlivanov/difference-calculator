#!/usr/bin/env node

import program from 'commander';
import genDiff from '../src/index.js';

// TODO - get version from package.json with webpack?

program
  .version('1.2.2')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filePath1, filePath2) =>
    console.log(genDiff(filePath1, filePath2, program.format)),
  )
  .parse(process.argv);
