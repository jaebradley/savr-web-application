const merge = require('webpack-merge');
// const {
//   BundleAnalyzerPlugin,
// } = require('webpack-bundle-analyzer');

const common = require('./common');

module.exports = merge.smart(
  common,
  {
    mode: 'production',
    devtool: 'source-map',
  },
);
