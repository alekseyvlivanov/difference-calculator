import { getFixturePath, readFixtureFile } from './testUtils.js';
import genDiff from '../src/index.js';

const jsonBeforePath = getFixturePath('before.json');
const jsonAfterPath = getFixturePath('after.json');
const jsonResult = readFixtureFile('result.json');

test('genDiff', () => {
  expect(genDiff(jsonBeforePath, jsonAfterPath)).toEqual(jsonResult);
});
