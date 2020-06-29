import buiildOutput from '../src/formatters.js';

test('buiildOutput', () => {
  const testObject = {
    follow: { status: 'removed', value: false },
    host: { status: 'unmodified', value: 'hexlet.io' },
    proxy: { status: 'removed', value: '123.234.53.22' },
    timeout: { status: 'modified', value1: 50, value2: 20 },
    verbose: { status: 'added', value: true },
  };

  const testOutput = `{
    - follow: false
      host: hexlet.io
    - proxy: 123.234.53.22
    - timeout: 50
    + timeout: 20
    + verbose: true
  }
  `;

  expect(buiildOutput(testObject)).toBe(testOutput);
});
