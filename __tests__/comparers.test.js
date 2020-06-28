import { readFixtureFile } from './testUtils.js';
import compareObjects from '../src/comparers.js';
import parseJSON from '../src/parsers.js';

const jsonBefore = readFixtureFile('before.json');
const jsonAfter = readFixtureFile('after.json');
const jsonResult = readFixtureFile('result.json');

test('compareObjects', () => {
  expect(compareObjects(parseJSON(jsonBefore), parseJSON(jsonAfter))).toBe(
    jsonResult,
  );
});
