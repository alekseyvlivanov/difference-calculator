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
  let output = '';

  switch (status) {
    case 'unmodified':
      output = '';
      break;

    case 'added':
      output = `Property '${levelKey}' was added with value: ${plainValue(
        value,
      )}\n`;
      break;

    case 'removed':
      output = `Property '${levelKey}' was removed\n`;
      break;

    case 'modified':
      output = `Property '${levelKey}' was updated. From ${plainValue(
        value.value1,
      )} to ${plainValue(value.value2)}\n`;
      break;

    // children
    default:
      output = `${value
        .map((prop) =>
          plainish(prop.key, prop.status, prop.value, `${levelKey}`),
        )
        .join('')}`;
  }

  return output;
};

const formatPlain = (difference) => {
  // console.log(JSON.stringify(difference, null, 2));
  return difference
    .map(({ key, status, value }) => plainish(key, status, value, ''))
    .filter((str) => str !== '')
    .join('');
};

export default formatPlain;
