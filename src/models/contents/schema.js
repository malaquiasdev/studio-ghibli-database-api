/* eslint-disable max-lines */
const contentsSchema = {
  id: {
    type: String,
    required: true,
    hashKey: true,
  },
  contentId: {
    type: String,
    required: true,
    index: {
      name: 'contentId-index',
    },
  },
  type: {
    type: String,
    required: true,
    index: {
      name: 'type-index',
    },
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  budget: {
    type: Number,
  },
  releaseYear: {
    type: String,
  },
  revenue: {
    type: Number,
  },
  runTime: {
    type: Number,
  },
  language: {
    type: String,
    required: true,
    index: {
      name: 'languageIndex',
    },
  },
  originalLanguage: {
    type: Object,
    schema: {
      iso6391: String,
      name: String,
    },
  },
  genres: {
    type: Array,
    schema: [
      {
        type: String,
      },
    ],
  },
  cast: {
    type: Array,
    schema: [
      {
        type: Object,
        schema: {
          characterName: String,
          name: String,
          order: Number,
          role: String,
        },
      },
    ],
  },
  crew: {
    type: Array,
    schema: [
      {
        type: Object,
        schema: {
          name: String,
          order: Number,
          role: String,
        },
      },
    ],
  },
  ratings: {
    type: Array,
    schema: [
      {
        type: Object,
        schema: {
          key: String,
          value: String,
        },
      },
    ],
  },
};

module.exports = contentsSchema;
