import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, '__fixtures__', filename);

const readFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), 'utf-8');

const jsonBeforePath = getFixturePath('before.json');
const jsonAfterPath = getFixturePath('after.json');
const jsonResult = readFile('result.json');

test('genDiff', () => {
  expect(genDiff(jsonBeforePath, jsonAfterPath)).toEqual(jsonResult);
});
