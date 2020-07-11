import buildDiff from './buildDiff.js';
import buildOutput from './formatters/index.js';
import parseContent from './parsers.js';
import { getFileContent, getFileType } from './utils.js';

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const fileContent1 = getFileContent(filePath1);
  const fileContent2 = getFileContent(filePath2);

  const fileType1 = getFileType(filePath1);
  const fileType2 = getFileType(filePath2);

  const object1 = parseContent(fileContent1, fileType1);
  const object2 = parseContent(fileContent2, fileType2);

  const difference = buildDiff(object1, object2);

  return buildOutput(difference, format);
};

export default genDiff;
