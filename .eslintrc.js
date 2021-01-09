module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'jest'],
  rules: {
    'arrow-body-style': 'off',
    'function-paren-newline': 'off',
    'prettier/prettier': ['error'],
    complexity: ['error', 5],
    'max-lines': ['error', { max: 50, skipComments: true }],
    'max-statements': ['warn', { max: 10 }],
    'max-statements-per-line': ['warn', { max: 1 }],
    'max-nested-callbacks': ['warn', { max: 2 }],
    'max-depth': ['warn', { max: 2 }],
    'max-len': ['warn', 120, { ignoreUrls: true }],
    'max-params': ['warn', 3],
  },
  globals: {
    describe: true,
    expect: true,
    it: true,
    jest: true,
  },
  env: {
    es6: true,
    jest: true,
    node: true,
  },
};
