import { getFixturePath, readFixtureFile } from './testUtils.js';
import genDiff from '../src/index.js';

const fileTypes = ['ini', 'json', 'yml'];
const formats = ['json', 'plain', 'stylish'];

const tests = fileTypes.flatMap((fileType) =>
  formats.map((format) => [fileType, format]),
);

test.each(tests)('genDiff: %s files => %s format', (fileType, format) => {
  const firstFilePath = getFixturePath(`before.${fileType}`);
  const secondFilePath = getFixturePath(`after.${fileType}`);
  const resultFileContent = readFixtureFile(`${format}.result`);

  expect(genDiff(firstFilePath, secondFilePath, format)).toEqual(
    resultFileContent,
  );
});
