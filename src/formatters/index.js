import formatJSON from './json.js';
import formatPlain from './plain.js';
import formatStylish from './stylish.js';

const buildOutput = (difference, format) => {
  switch (format) {
    case 'json':
      return formatJSON(difference);

    case 'plain':
      return formatPlain(difference);

    case 'stylish':
    default:
      return formatStylish(difference, 1);
  }
};

export default buildOutput;
