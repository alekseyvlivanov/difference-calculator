import _ from 'lodash';

const buildDiffByKey = (key, value1, value2, func) => {
  if (value1 === undefined) {
    return { key, status: 'added', value: value2 };
  }

  if (value2 === undefined) {
    return { key, status: 'removed', value: value1 };
  }

  if (_.isObject(value1) && _.isObject(value2)) {
    return { key, status: 'children', value: func(value1, value2) };
  }

  if (value1 === value2) {
    return { key, status: 'unmodified', value: value2 };
  }

  return { key, status: 'modified', value: { value1, value2 } };
};

const buildDiff = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();

  return keys.map((key) => {
    const value1 = _.get(obj1, key);
    const value2 = _.get(obj2, key);

    return buildDiffByKey(key, value1, value2, buildDiff);
  });
};

export default buildDiff;
