import fs from 'fs';
import path from 'path';
import compareObjects from './utils.js';

const genDiff = (filePath1, filePath2) => {
  const currentDir = process.cwd();

  const fileContents1 = fs.readFileSync(
    path.resolve(currentDir, filePath1),
    'utf8',
  );
  const fileContents2 = fs.readFileSync(
    path.resolve(currentDir, filePath2),
    'utf8',
  );

  return compareObjects(JSON.parse(fileContents1), JSON.parse(fileContents2));
};

export default genDiff;
