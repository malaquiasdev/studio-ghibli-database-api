module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es6: true
    },
    ignorePatterns: ["test/**", "*.test.js"],
    extends: ["airbnb-base", "prettier"],
    plugins: ["prettier"],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly"
    },
    parserOptions: {
      ecmaVersion: 2018
    },
    rules: {
      "prettier/prettier": ["warn"],
      "import/prefer-default-export": ["off"]
    }
};