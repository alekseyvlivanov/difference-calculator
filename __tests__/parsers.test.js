import parseJSON from '../src/parsers.js';

test('parseJSON', () => {
  const processObject = process.env.PATH;
  const processJSON = JSON.stringify(processObject);

  expect(parseJSON(processJSON)).toEqual(processObject);
});
