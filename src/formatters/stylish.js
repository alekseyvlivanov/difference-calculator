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

  switch (status) {
    case 'unmodified':
      return `${indent}  ${key}: ${styleValue(value, level)}`;

    case 'added':
      return `${indent}+ ${key}: ${styleValue(value, level)}`;

    case 'removed':
      return `${indent}- ${key}: ${styleValue(value, level)}`;

    case 'modified':
      return `${indent}- ${key}: ${styleValue(
        value.value1,
        level,
      )}\n${indent}+ ${key}: ${styleValue(value.value2, level)}`;

    default:
      // children
      return `${indent}  ${key}: {\n${value
        .map((prop) => stylish(prop.key, prop.status, prop.value, level + 2))
        .join('\n')}\n${indent}  }`;
  }
};

const formatStylish = (difference, level) => {
  return `{
${difference
  .map(({ key, status, value }) => stylish(key, status, value, level))
  .join('\n')}
}`;
};

export default formatStylish;
