import { getFixturePath, readFixtureFile } from './testUtils.js';
import { getFileContents, getFileType } from '../src/utils.js';

test('getFileContents', () => {
  const txtResultPath = getFixturePath('result.txt');
  const txtResult = readFixtureFile('result.txt');

  expect(getFileContents(txtResultPath)).toBe(txtResult);
});

test('getFileType', () => {
  expect(getFileType('/home/user/filename.md')).toBe('md');
  expect(getFileType('../user/filename')).toBe('');
  expect(getFileType('./filename.config.json')).toBe('json');
});
