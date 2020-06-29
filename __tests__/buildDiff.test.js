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

  const objectResult = {
    follow: { status: 'removed', value: false },
    host: { status: 'unmodified', value: 'hexlet.io' },
    proxy: { status: 'removed', value: '123.234.53.22' },
    timeout: { status: 'modified', value1: 50, value2: 20 },
    verbose: { status: 'added', value: true },
  };

  expect(buildDiff(objectBefore, objectAfter)).toEqual(objectResult);
});
