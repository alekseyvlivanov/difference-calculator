import buildDiff from './buildDiff.js';
import buildOutput from './formatters/index.js';
import parseContents from './parsers.js';
import { getFileContents, getFileType } from './utils.js';

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const fileContents1 = getFileContents(filePath1);
  const fileContents2 = getFileContents(filePath2);

  const fileType1 = getFileType(filePath1);
  const fileType2 = getFileType(filePath2);

  const object1 = parseContents(fileContents1, fileType1);
  const object2 = parseContents(fileContents2, fileType2);

  const difference = buildDiff(object1, object2);

  return buildOutput(difference, format);
};

export default genDiff;
