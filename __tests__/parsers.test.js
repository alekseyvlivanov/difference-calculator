import parseJSON from '../src/parsers.js';

test('parseJSON', () => {
  const processObject = process.env.PATH;
  const processJSON = JSON.stringify(processObject);

  console.log(processObject);
  console.log(processJSON);

  expect(parseJSON(processJSON)).toEqual(processObject);
});
