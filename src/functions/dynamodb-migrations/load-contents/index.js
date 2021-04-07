const path = require('path');
const logger = require('pino')();
const fs = require('fs').promises;

async function loadContents() {
  try {
    const dirname = path.join(__dirname, '../../../../database/movies/');
    const filenames = await fs.readdir(dirname);
    const filesPromise = filenames.map((filename) => {
      return fs.readFile(dirname + filename, 'utf-8');
    });
    const response = await Promise.all(filesPromise);
    return filenames.reduce((acc, _, currentIndex) => {
      const content = response[currentIndex];
      acc.push(JSON.parse(content));
      return acc;
    }, []);
  } catch (error) {
    logger.error(`Got an error trying to read the file: ${error.message}`);
  }
  return [];
}

module.exports = loadContents;
