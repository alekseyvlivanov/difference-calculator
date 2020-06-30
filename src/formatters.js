const padding = 2;

const stylish = (key, status, value, level) => {
  const indent = ' '.repeat(level * padding);

  let output = '';

  switch (status) {
    case 'unmodified':
      output += `${indent}  ${key}: ${value}`;
      break;

    case 'added':
      output += `${indent}+ ${key}: ${value}`;
      break;

    case 'removed':
      output += `${indent}- ${key}: ${value}`;
      break;

    case 'modified':
      output += `${indent}- ${key}: ${value.value1}\n`;
      output += `${indent}+ ${key}: ${value.value2}`;
      break;

    // children
    default:
      // out = buiildOutput(value, format, level + 1);
      // console.log('key:', key);
      // console.log('value:', value);
      // console.log(out);
      output += `${indent}  ${key}: {}`;
    // break;
  }

  return output;
};

const buiildOutput = (contents, format) => {
  const level = 1;

  switch (format) {
    case 'json':
      return JSON.stringify(contents, null, ' ', padding);

    default:
      return `{\n${contents
        .map(({ key, status, value }) => stylish(key, status, value, level))
        .join('\n')}\n}\n`;
  }
};

export default buiildOutput;
