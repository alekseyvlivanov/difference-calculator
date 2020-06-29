import parseContents from '../src/parsers.js';

test('parseContents for INI', () => {
  const testINI = `; this comment is being ignored
  user = dbuser
  password = dbpassword
  database = use_this_database`;

  const testObject = {
    user: 'dbuser',
    password: 'dbpassword',
    database: 'use_this_database',
  };

  expect(parseContents(testINI, 'ini')).toEqual(testObject);
});

test('parseContents for JSON', () => {
  const processObject = process.env.PATH;
  const processJSON = JSON.stringify(processObject);

  expect(parseContents(processJSON, 'json')).toEqual(processObject);
});

test('parseContents for YAML', () => {
  const testYAML = `---
  timeout: 20
  verbose: true
  host: hexlet.io
  `;

  const testObject = {
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  };

  expect(parseContents(testYAML, 'yml')).toEqual(testObject);
});
