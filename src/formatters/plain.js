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
    return `Property '${levelKey}' was added with value: ${plainValue(
      value,
    )}\n`;
  }

  if (status === 'removed') {
    return `Property '${levelKey}' was removed\n`;
  }

  if (status === 'modified') {
    return `Property '${levelKey}' was updated. From ${plainValue(
      value.value1,
    )} to ${plainValue(value.value2)}\n`;
  }

  // children
  return `${value
    .map((prop) => plainish(prop.key, prop.status, prop.value, `${levelKey}`))
    .join('')}`;
};

const formatPlain = (difference) => {
  // console.log(JSON.stringify(difference, null, 2));
  return difference
    .map(({ key, status, value }) => plainish(key, status, value, ''))
    .filter((str) => str !== '')
    .join('');
};

export default formatPlain;
