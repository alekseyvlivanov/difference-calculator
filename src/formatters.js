const buiildOutput = (contents, format, level = 1) => {
  let output = '';
  const indent = ' '.repeat(level * 2);

  switch (format) {
    case 'json':
      return JSON.stringify(contents, null, ' ', 4);

    default:
      Object.entries(contents).forEach(([key, value]) => {
        switch (value.status) {
          case 'children':
            break;

          case 'unmodified':
            output += `${indent}  ${key}: ${value.value}\n`;
            break;

          case 'added':
            output += `${indent}+ ${key}: ${value.value}\n`;
            break;

          case 'removed':
            output += `${indent}- ${key}: ${value.value}\n`;
            break;

          default:
            output += `${indent}- ${key}: ${value.value1}\n`;
            output += `${indent}+ ${key}: ${value.value2}\n`;
        }
      });

      return `{\n${output}}\n`;
  }
};

export default buiildOutput;
