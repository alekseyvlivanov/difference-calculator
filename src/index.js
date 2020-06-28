import compareObjects from './comparers.js';
import parseContents from './parsers.js';
import { getFileContents, getFileType } from './utils.js';

const genDiff = (filePath1, filePath2) => {
  const fileContents1 = getFileContents(filePath1);
  const fileContents2 = getFileContents(filePath2);

  const fileType1 = getFileType(filePath1);
  const fileType2 = getFileType(filePath2);

  const object1 = parseContents(fileContents1, fileType1);
  const object2 = parseContents(fileContents2, fileType2);

  return compareObjects(object1, object2);
};

export default genDiff;
