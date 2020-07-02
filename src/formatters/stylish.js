import _ from 'lodash';

const padding = 2;

const makeGroupIndent = (level) => ' '.repeat(padding * level);

const styleValue = (value, level) => {
  const indent = makeGroupIndent(level + 1);
  if (!_.isObject(value)) {
    return value;
  }

  return `{
${Object.entries(value)
  .map(([key, val]) => `${indent}    ${key}: ${styleValue(val, level + 1)}`)
  .join('\n')}
${indent}}`;
};

const stylish = (key, status, value, level) => {
  const indent = makeGroupIndent(level);

  let output = '';

  switch (status) {
    case 'unmodified':
      output += `${indent}  ${key}: ${styleValue(value, level)}`;
      break;

    case 'added':
      output += `${indent}+ ${key}: ${styleValue(value, level)}`;
      break;

    case 'removed':
      output += `${indent}- ${key}: ${styleValue(value, level)}`;
      break;

    case 'modified':
      output += `${indent}- ${key}: ${styleValue(value.value1, level)}\n`;
      output += `${indent}+ ${key}: ${styleValue(value.value2, level)}`;
      break;

    // children
    default:
      output += `${indent}  ${key}: {\n`;
      output += `${value
        .map((prop) => stylish(prop.key, prop.status, prop.value, level + 2))
        .join('\n')}\n`;
      output += `${indent}  }`;
  }

  return output;
};

const formatStylish = (difference, level) => {
  return `{
${difference
  .map(({ key, status, value }) => stylish(key, status, value, level))
  .join('\n')}
}
`;
};

export default formatStylish;
