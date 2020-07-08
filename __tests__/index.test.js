import { getFixturePath, readFixtureFile } from './testUtils.js';
import genDiff from '../src/index.js';

const fileTypes = ['ini', 'json', 'yml'];
const formats = ['json', 'plain', 'stylish'];

const tests = fileTypes.flatMap((fileType) =>
  formats.map((format) => [fileType, format]),
);

test.each(tests)('genDiff: %s files => %s format', (fileType, format) => {
  const beforePath = getFixturePath(`before.${fileType}`);
  const afterPath = getFixturePath(`after.${fileType}`);
  const resultFile = readFixtureFile(`${format}.result`);

  expect(genDiff(beforePath, afterPath, format)).toEqual(resultFile);
});
