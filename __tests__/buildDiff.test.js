import buildDiff from '../src/buildDiff.js';

test('buildDiff', () => {
  const objectBefore = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };

  const objectAfter = {
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  };

  const diffResult = [
    { key: 'follow', status: 'removed', value: false },
    { key: 'host', status: 'unmodified', value: 'hexlet.io' },
    { key: 'proxy', status: 'removed', value: '123.234.53.22' },
    { key: 'timeout', status: 'modified', value: { value1: 50, value2: 20 } },
    { key: 'verbose', status: 'added', value: true },
  ];

  expect(buildDiff(objectBefore, objectAfter)).toEqual(diffResult);
});
