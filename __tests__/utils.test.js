import { getFixturePath, readFixtureFile } from './testUtils.js';
import { getFileContents, getFileType } from '../src/utils.js';

test('getFileContents', () => {
  const jsonResultPath = getFixturePath('result.json');
  const jsonResult = readFixtureFile('result.json');

  expect(getFileContents(jsonResultPath)).toBe(jsonResult);
});

test('getFileType', () => {
  expect(getFileType('/home/user/filename.md')).toBe('md');
  expect(getFileType('../user/filename')).toBe('');
  expect(getFileType('./filename.config.json')).toBe('json');
});
