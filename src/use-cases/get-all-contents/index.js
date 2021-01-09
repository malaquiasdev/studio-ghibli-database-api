async function getAllContents({ ContentsModel }) {
  return ContentsModel.scan().exec();
}

module.exports = getAllContents;
