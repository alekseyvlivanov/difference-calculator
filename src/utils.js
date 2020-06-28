import fs from 'fs';
import path from 'path';

const getFileContents = (filePath) => {
  const currentDir = process.cwd();
  return fs.readFileSync(path.resolve(currentDir, filePath), 'utf8');
};

const getFileType = (filePath) => path.extname(filePath).slice(1);

export { getFileContents, getFileType };
