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
  images: {
    type: Array,
    schema: [
      {
        type: Object,
        schema: {
          category: String,
          height: Number,
          width: Number,
          orientation: String,
          ratio: String,
          text: Boolean,
          url: String,
        },
      },
    ],
  },
};

module.exports = contentsSchema;
