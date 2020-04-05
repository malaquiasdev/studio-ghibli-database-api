function filterUniqueItem(data) {
  return [...new Map(data.map((item) => [item.imdbID, item])).values()];
}

module.exports = filterUniqueItem;
