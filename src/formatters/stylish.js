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

const stylish = (key, status, rest, level, fn) => {
  const indent = makeGroupIndent(level);

  switch (status) {
    case 'added':
      return `${indent}+ ${key}: ${styleValue(rest.value, level)}`;

    case 'removed':
      return `${indent}- ${key}: ${styleValue(rest.value, level)}`;

    case 'children':
      return `${indent}  ${key}: {\n${fn(
        rest.children,
        level + 1,
      )}\n${indent}  }`;

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

const buildOutput = (difference, level) => {
  const output = difference
    .map((group) => {
      const { key, status, ...rest } = group;
      return stylish(key, status, rest, level + 1, buildOutput);
    })
    .join('\n');

  return output;
};

const formatStylish = (difference) => {
  const level = 0;

  return `{\n${buildOutput(difference, level)}\n}`;
};

export default formatStylish;
