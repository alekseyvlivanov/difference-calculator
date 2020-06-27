import fs from 'fs';
import path from 'path';
import compareObjects from '../src/utils.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, '__fixtures__', filename);

const readFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), 'utf-8');

const jsonBefore = readFile('before.json');
const jsonAfter = readFile('after.json');
const jsonResult = readFile('result.json');

test('compareObjects', () => {
  expect(compareObjects(JSON.parse(jsonBefore), JSON.parse(jsonAfter))).toBe(
    jsonResult,
  );
});
