import _ from 'lodash';

const plainValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }

  if (typeof value === 'string') {
    return `'${value}'`;
  }

  return `${value}`;
};

const plainish = (key, status, rest, level, fn) => {
  const levelKey = level ? `${level}.${key}` : key;

  switch (status) {
    case 'added':
      return `Property '${levelKey}' was added with value: ${plainValue(
        rest.value,
      )}`;

    case 'removed':
      return `Property '${levelKey}' was removed`;

    case 'children':
      return fn(rest.children, levelKey);

    case 'unmodified':
      return null;

    case 'modified':
      return `Property '${levelKey}' was updated. From ${plainValue(
        rest.value1,
      )} to ${plainValue(rest.value2)}`;

    default:
      throw new Error(`Unknown status: ${status} for key: ${levelKey}`);
  }
};

const buildOutput = (difference, level) => {
  const output = difference
    .map((group) => {
      const { key, status, ...rest } = group;
      return plainish(key, status, rest, level, buildOutput);
    })
    .filter((str) => str)
    .join('\n');

  return output;
};

const formatPlain = (difference) => {
  const level = '';

  return buildOutput(difference, level);
};

export default formatPlain;
