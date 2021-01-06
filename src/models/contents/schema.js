/* eslint-disable max-lines */
const contentsSchema = {
  id: {
    type: String,
    required: true,
  },
  titles: {
    type: Array,
    required: true,
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
  homepage: {
    type: String,
  },
  adult: {
    type: Boolean,
  },
  budget: {
    type: Number,
  },
  releaseDate: {
    type: String,
  },
  revenue: {
    type: Number,
  },
  runTime: {
    type: Number,
  },
  language: {
    type: Object,
    schema: {
      iso6391: String,
      name: String,
    },
  },
  descriptions: {
    type: Array,
    required: true,
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
  genres: {
    type: Array,
    schema: [
      {
        type: Object,
        schema: {
          id: Number,
          list: {
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
        },
      },
    ],
  },
};

module.exports = contentsSchema;
