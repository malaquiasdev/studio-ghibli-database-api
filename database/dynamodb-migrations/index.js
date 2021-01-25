require('dotenv').config();
const logger = require('pino')();
const ContentsModel = require('../../src/models/contents');
const deleteOldestData = require('./delete_oldest_data');
const loadContents = require('./load-contents');
const separateContentByLanguage = require('./separete-content-by-language');

async function executeContentsMigrations() {
  try {
    logger.info(`Start - the executeContentsMigrations function`);
    const rawContents = await loadContents();
    const contents = separateContentByLanguage(rawContents);
    const promises = contents.map((content) => ContentsModel.create(content));
    await deleteOldestData(ContentsModel);
    await Promise.all(promises);
    logger.info(`End - the executeContentsMigrations function`);
  } catch (error) {
    logger.error(`Got an error trying to save contents: ${error.message}`);
  }
  return true;
}

executeContentsMigrations();
