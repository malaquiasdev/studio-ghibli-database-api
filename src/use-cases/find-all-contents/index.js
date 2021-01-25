async function findAllContents({ language }, { ContentsModel }) {
  const result = await ContentsModel.scan()
    .using('language-index')
    .where('language')
    .eq(language)
    .exec();
  return result;
}

module.exports = findAllContents;
