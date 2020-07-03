import { getFixturePath, readFixtureFile } from './testUtils.js';
import genDiff from '../src/index.js';

test('genDiff', () => {
  const iniBeforePath = getFixturePath('before.ini');
  const iniAfterPath = getFixturePath('after.ini');

  const jsonBeforePath = getFixturePath('before.json');
  const jsonAfterPath = getFixturePath('after.json');

  const yamlBeforePath = getFixturePath('before.yml');
  const yamlAfterPath = getFixturePath('after.yml');

  const jsonResult = readFixtureFile('json.result');
  const plainResult = readFixtureFile('plain.result');
  const stylishResult = readFixtureFile('stylish.result');

  expect(genDiff(iniBeforePath, iniAfterPath, 'json')).toEqual(jsonResult);
  expect(genDiff(jsonBeforePath, jsonAfterPath, 'plain')).toEqual(plainResult);
  expect(genDiff(yamlBeforePath, yamlAfterPath, 'stylish')).toEqual(
    stylishResult,
  );
  expect(genDiff(yamlBeforePath, yamlAfterPath)).toEqual(stylishResult);
});
