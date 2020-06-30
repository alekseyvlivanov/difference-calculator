import buiildOutput from '../src/formatters.js';

test('buiildOutput', () => {
  const testDiff = [
    { key: 'follow', status: 'removed', value: false },
    { key: 'host', status: 'unmodified', value: 'hexlet.io' },
    { key: 'proxy', status: 'removed', value: '123.234.53.22' },
    { key: 'timeout', status: 'modified', value: { value1: 50, value2: 20 } },
    { key: 'verbose', status: 'added', value: true },
  ];

  const testOutput = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
`;

  expect(buiildOutput(testDiff)).toEqual(testOutput);
});
