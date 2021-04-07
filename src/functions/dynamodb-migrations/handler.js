/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
require('dotenv').config();
const logger = require('pino')();
const uuid = require('uuid');
const saveNewItem = require('../../components/dynamodb/querys/save-item');
const config = require('./config');
const loadContents = require('./load-contents');
const separateContentByLanguage = require('./separete-content-by-language');

async function executeContentsMigrations() {
  try {
    logger.info(`Start - the executeContentsMigrations function`);
    const rawContents = await loadContents();
    const contents = separateContentByLanguage(rawContents);
    for (const content of contents) {
      await saveNewItem(config.moviesTableName, {
        id: uuid.v4(),
        ...content,
      });
    }
    logger.info(`End - the executeContentsMigrations function`);
  } catch (error) {
    logger.error(`Got an error trying to save contents: ${error.message}`);
  }
  return true;
}

module.exports = { executeContentsMigrations };
