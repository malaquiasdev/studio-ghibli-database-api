/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
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
    await deleteOldestData(ContentsModel);
    for (const content of contents) {
      await ContentsModel.create(content);
    }
    logger.info(`End - the executeContentsMigrations function`);
  } catch (error) {
    logger.error(`Got an error trying to save contents: ${error.message}`);
  }
  return true;
}

executeContentsMigrations();
