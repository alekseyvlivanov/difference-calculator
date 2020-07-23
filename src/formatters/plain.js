import _ from 'lodash';

const getPlainValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }

  if (typeof value === 'string') {
    return `'${value}'`;
  }

  return `${value}`;
};

const plainish = (key, status, rest, ancestry, fn) => {
  const ancestryKey = ancestry ? `${ancestry}.${key}` : key;

  switch (status) {
    case 'added':
      return `Property '${ancestryKey}' was added with value: ${getPlainValue(
        rest.value,
      )}`;

    case 'removed':
      return `Property '${ancestryKey}' was removed`;

    case 'children':
      return fn(rest.children, ancestryKey);

    case 'unmodified':
      return null;

    case 'modified':
      return `Property '${ancestryKey}' was updated. From ${getPlainValue(
        rest.value1,
      )} to ${getPlainValue(rest.value2)}`;

    default:
      throw new Error(`Unknown status: ${status} for key: ${ancestryKey}`);
  }
};

const buildOutput = (difference, ancestry) => {
  const output = difference
    .map((group) => {
      const { key, status, ...rest } = group;
      return plainish(key, status, rest, ancestry, buildOutput);
    })
    .filter((str) => str)
    .join('\n');

  return output;
};

const formatPlain = (difference) => {
  const ancestry = '';

  return buildOutput(difference, ancestry);
};

export default formatPlain;
