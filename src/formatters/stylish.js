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

const stylish = (key, status, rest, level) => {
  const indent = makeGroupIndent(level);

  switch (status) {
    case 'added':
      return `${indent}+ ${key}: ${styleValue(rest.value, level)}`;

    case 'removed':
      return `${indent}- ${key}: ${styleValue(rest.value, level)}`;

    case 'children':
      return `${indent}  ${key}: {\n${rest.children
        .map((prop) => {
          const { key: propKey, status: propStatus, ...propRest } = prop;
          return stylish(propKey, propStatus, propRest, level + 2);
        })
        .join('\n')}\n${indent}  }`;

    case 'unmodified':
      return `${indent}  ${key}: ${styleValue(rest.value, level)}`;

    case 'modified':
      return `${indent}- ${key}: ${styleValue(
        rest.value1,
        level,
      )}\n${indent}+ ${key}: ${styleValue(rest.value2, level)}`;

    default:
      throw new Error(`Unknown status: ${status} for key: ${level}`);
  }
};

const formatStylish = (difference) => {
  const level = 1;

  const output = difference
    .map((group) => {
      const { key, status, ...rest } = group;
      return stylish(key, status, rest, level);
    })
    .join('\n');

  return `{\n${output}\n}`;
};

export default formatStylish;
