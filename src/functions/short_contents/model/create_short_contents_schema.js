function createShortContentsSchema({ Schema }) {
  return new Schema(
    {
      id: {
        type: String,
        required: true,
      },
      imdbID: {
        type: String,
        required: true,
      },
      posterURL: {
        type: String,
      },
      title: {
        type: String,
      },
      publishYear: {
        type: String,
      },
      ageGroup: {
        type: String,
      },
      duration: {
        type: String,
      },
      genres: {
        type: [String],
      },
      ratingImdb: {
        type: String,
      },
      ratingMetascore: {
        type: String,
      },
      description: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );
}

module.exports = createShortContentsSchema;
