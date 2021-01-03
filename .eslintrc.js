module.exports = {
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
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "prettier/@typescript-eslint",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": ["warn"],
    "arrow-body-style": "warn",
    "function-paren-newline": "off",
    "max-lines": ["error", { max: 60, skipComments: true }],
    complexity: ["error", 5],
    "max-statements": ["error", { max: 10 }],
    "max-statements-per-line": ["error", { max: 1 }],
    "max-nested-callbacks": ["error", { max: 2 }],
    "max-depth": ["error", { max: 2 }],
    "max-len": ["error", 120, { ignoreUrls: true }],
    "max-params": ["error", 3],
  },
};
