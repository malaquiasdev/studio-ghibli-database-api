async function deleteOldestData(ShortContentsModel) {
  const allData = await ShortContentsModel.scan().exec();
  await ShortContentsModel.batchDelete(allData);
  return true;
}

module.exports = deleteOldestData;
