import { getFixturePath, readFixtureFile } from './testUtils.js';
import { getFileContents, getFileType } from '../src/utils.js';

test('getFileContents', () => {
  const stylishResultPath = getFixturePath('stylish.result');
  const stylishResult = readFixtureFile('stylish.result');

  expect(getFileContents(stylishResultPath)).toBe(stylishResult);
});

test('getFileType', () => {
  expect(getFileType('/home/user/filename.md')).toBe('md');
  expect(getFileType('../user/filename')).toBe('');
  expect(getFileType('./filename.config.json')).toBe('json');
});
