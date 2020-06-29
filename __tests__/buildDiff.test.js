import buildDiff from '../src/buildDiff.js';

test('buildDiff', () => {
  const objectBefore = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };
  const objectAfter = { timeout: 20, verbose: true, host: 'hexlet.io' };
  const objectResult = `{
 + timeout: 20
 - timeout: 50
 + verbose: true
   host: hexlet.io
 - proxy: 123.234.53.22
 - follow: false
}`;

  expect(buildDiff(objectBefore, objectAfter)).toBe(objectResult);
});
