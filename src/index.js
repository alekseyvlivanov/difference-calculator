import compareObjects from './comparers.js';
import parseJSON from './parsers.js';
import { getFileContents } from './utils.js';

const genDiff = (filePath1, filePath2) => {
  const fileContents1 = getFileContents(filePath1);
  const fileContents2 = getFileContents(filePath2);

  const object1 = parseJSON(fileContents1);
  const object2 = parseJSON(fileContents2);

  return compareObjects(object1, object2);
};

export default genDiff;
