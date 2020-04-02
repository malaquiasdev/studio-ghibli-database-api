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
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      publishYear: {
        type: String,
        required: true,
      },
      ageGroup: {
        type: String,
        required: true,
      },
      duration: {
        type: String,
        required: true,
      },
      genres: {
        type: [String],
        required: true,
      },
      imdbRating: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
}

module.exports = createShortContentsSchema;
