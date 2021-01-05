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
};

module.exports = contentsSchema;
