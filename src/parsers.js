import ini from 'ini';
import yaml from 'js-yaml';

const parseContent = (contents, type) => {
  switch (type) {
    case 'ini':
      return ini.decode(contents);
    case 'json':
      return JSON.parse(contents);
    case 'yml':
      return yaml.safeLoad(contents);
    default:
      throw new Error(`'${type}' format is not supported yet`);
  }
};

export default parseContent;
