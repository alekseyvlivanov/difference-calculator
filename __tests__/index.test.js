import { getFixturePath, readFixtureFile } from './testUtils.js';
import genDiff from '../src/index.js';

test('genDiff', () => {
  const jsonBeforePath = getFixturePath('before.json');
  const jsonAfterPath = getFixturePath('after.json');

  const yamlBeforePath = getFixturePath('before.yml');
  const yamlAfterPath = getFixturePath('after.yml');

  const jsonResult = readFixtureFile('result.json');

  expect(genDiff(jsonBeforePath, jsonAfterPath)).toEqual(jsonResult);
  expect(genDiff(yamlBeforePath, yamlAfterPath)).toEqual(jsonResult);
});
