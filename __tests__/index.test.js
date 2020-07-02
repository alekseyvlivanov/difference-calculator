import { getFixturePath, readFixtureFile } from './testUtils.js';
import genDiff from '../src/index.js';

test('genDiff', () => {
  const iniBeforePath = getFixturePath('before.ini');
  const iniAfterPath = getFixturePath('after.ini');

  const jsonBeforePath = getFixturePath('before.json');
  const jsonAfterPath = getFixturePath('after.json');

  const yamlBeforePath = getFixturePath('before.yml');
  const yamlAfterPath = getFixturePath('after.yml');

  const plainResult = readFixtureFile('plain.result');
  const stylishResult = readFixtureFile('stylish.result');

  expect(genDiff(iniBeforePath, iniAfterPath)).toEqual(stylishResult);
  expect(genDiff(jsonBeforePath, jsonAfterPath, 'stylish')).toEqual(
    stylishResult,
  );
  expect(genDiff(yamlBeforePath, yamlAfterPath, 'plain')).toEqual(plainResult);
});
