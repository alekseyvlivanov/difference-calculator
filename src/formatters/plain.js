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

const plainish = (key, status, value, level) => {
  const levelKey = level ? `${level}.${key}` : key;

  if (status === 'unmodified') {
    return '';
  }

  if (status === 'added') {
    return `Property '${levelKey}' was added with value: ${plainValue(value)}`;
  }

  if (status === 'removed') {
    return `Property '${levelKey}' was removed`;
  }

  if (status === 'modified') {
    return `Property '${levelKey}' was updated. From ${plainValue(
      value.value1,
    )} to ${plainValue(value.value2)}`;
  }

  // children
  return `${value
    .map((prop) => plainish(prop.key, prop.status, prop.value, `${levelKey}`))
    .filter((str) => str !== '')
    .join('\n')}`;
};

const formatPlain = (difference) => {
  return difference
    .map(({ key, status, value }) => plainish(key, status, value, ''))
    .filter((str) => str !== '')
    .join('\n');
};

export default formatPlain;
