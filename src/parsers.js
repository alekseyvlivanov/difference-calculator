import yaml from 'js-yaml';

const parseContents = (contents, type) => {
  switch (type) {
    case 'json':
      return JSON.parse(contents);
    case 'yml':
      return yaml.safeLoad(contents);
    default:
      throw new Error(`'${type}' format is not supported yet`);
  }
};

export default parseContents;
