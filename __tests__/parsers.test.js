import { parseJSON, parseYAML } from '../src/parsers.js';

test('parseJSON', () => {
  const processObject = process.env.PATH;
  const processJSON = JSON.stringify(processObject);

  expect(parseJSON(processJSON)).toEqual(processObject);
});

test('parseYAML', () => {
  const testYAML = `---
  timeout: 20
  verbose: true
  host: hexlet.io
  `;
  const testObject = { timeout: 20, verbose: true, host: 'hexlet.io' };

  expect(parseYAML(testYAML)).toEqual(testObject);
});
