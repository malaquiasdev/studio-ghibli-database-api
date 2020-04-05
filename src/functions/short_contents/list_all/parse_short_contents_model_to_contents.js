function createNewModel(item) {
  return {
    id: item.id,
    title: item.title,
    publishYear: item.publishYear,
    rating: {
      imdb: item.imdbRating || 0,
    },
    description: item.description,
    duration: item.duration || null,
    genres: item.genres,
    posterURL: item.posterURL,
    ageGroup: item.ageGroup,
  };
}

function parseModelResponse(response) {
  return response.map((item) => createNewModel(item));
}

module.exports = parseModelResponse;
