import _ from 'lodash';

const buildDiff = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();

  return keys.map((key) => {
    if (!_.has(obj1, key)) {
      return { key, status: 'added', value: obj2[key] };
    }

    if (!_.has(obj2, key)) {
      return { key, status: 'removed', value: obj1[key] };
    }

    const value1 = _.get(obj1, key);
    const value2 = _.get(obj2, key);

    if (_.isObject(value1) && _.isObject(value2)) {
      return { key, status: 'children', value: buildDiff(value1, value2) };
    }

    if (value1 === value2) {
      return { key, status: 'unmodified', value: value2 };
    }

    return { key, status: 'modified', value: { value1, value2 } };
  });
};

export default buildDiff;
