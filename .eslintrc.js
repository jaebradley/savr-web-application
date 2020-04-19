const webpackResolveConfig = require('./configurations/webpack/resolve');

module.exports = {
  settings: {
    "import/resolver": {
      webpack: {
        config: webpackResolveConfig
      }
    },
  },
  extends: "eslint-config-airbnb",
  env: {
    jest: true,
    browser: true,
  },
  parser: "babel-eslint",
};
