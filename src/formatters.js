import _ from 'lodash';

const padding = 2;

const styleValue = (value, level) => {
  const indent = ' '.repeat(padding * (level + 1));

  if (!_.isObject(value)) {
    return value;
  }

  return `  {
${Object.entries(value)
  .map(([key, val]) => `${indent}  ${key}: ${styleValue(val, level + 1)}`)
  .join('\n')}
${indent}}`;
};

const stylish = (key, status, value, level) => {
  const indent = ' '.repeat(level === 1 ? 2 : (level + 1) * 2);
  let output = '';

  switch (status) {
    case 'unmodified':
      output += `${indent}  ${key}: ${styleValue(value, level + 1)}`;
      break;

    case 'added':
      output += `${indent}+ ${key}: ${styleValue(value, level + 1)}`;
      break;

    case 'removed':
      output += `${indent}- ${key}: ${styleValue(value, level + 1)}`;
      break;

    case 'modified':
      output += `${indent}- ${key}: ${styleValue(value.value1, level + 1)}\n`;
      output += `${indent}+ ${key}: ${styleValue(value.value2, level + 1)}`;
      break;

    // children
    default:
      output += `${indent}  ${key}: {\n`;
      output += `${value
        .map((prop) => stylish(prop.key, prop.status, prop.value, level + 1))
        .join('\n')}\n`;
      output += `${indent}  }`;
  }

  return output;
};

const buildOutput = (contents, format) => {
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

export default buildOutput;
