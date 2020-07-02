import formatJSON from './json.js';
import formatStylish from './stylish.js';

const buildOutput = (difference, format) => {
  switch (format) {
    case 'json':
      return formatJSON(difference, null, ' ', 2);

    case 'stylish':
    default:
      return formatStylish(difference, 1);
  }
};

export default buildOutput;
