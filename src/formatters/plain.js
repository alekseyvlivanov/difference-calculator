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

const plainish = (key, status, rest, level) => {
  const levelKey = level ? `${level}.${key}` : key;

  switch (status) {
    case 'added':
      return `Property '${levelKey}' was added with value: ${plainValue(
        rest.value,
      )}`;

    case 'removed':
      return `Property '${levelKey}' was removed`;

    case 'children':
      return `${rest.children
        .map((prop) => {
          const { key: propKey, status: propStatus, ...propRest } = prop;
          return plainish(propKey, propStatus, propRest, `${levelKey}`);
        })
        .filter((str) => str)
        .join('\n')}`;

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

const formatPlain = (difference) => {
  const level = '';

  const output = difference
    .map((group) => {
      const { key, status, ...rest } = group;
      return plainish(key, status, rest, level);
    })
    .filter((str) => str)
    .join('\n');

  return output;
};

export default formatPlain;
