import { getFixturePath, readFixtureFile } from './testUtils.js';
import genDiff from '../src/index.js';

test('genDiff', () => {
  const iniBeforePath = getFixturePath('before.ini');
  const iniAfterPath = getFixturePath('after.ini');

  const jsonBeforePath = getFixturePath('before.json');
  const jsonAfterPath = getFixturePath('after.json');

  const yamlBeforePath = getFixturePath('before.yml');
  const yamlAfterPath = getFixturePath('after.yml');

  const txtResult = readFixtureFile('result.txt');

  expect(genDiff(iniBeforePath, iniAfterPath)).toEqual(txtResult);
  expect(genDiff(jsonBeforePath, jsonAfterPath, 'stylish')).toEqual(txtResult);
  expect(genDiff(yamlBeforePath, yamlAfterPath)).toEqual(txtResult);
});
