const buiildOutput = (contents, format) => {
  switch (format) {
    default:
      return JSON.stringify(contents, null, ' ', 4);
  }
};

export default buiildOutput;
