const merge = require('webpack-merge');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const WebpackBuildNotifier = require('webpack-build-notifier');
const {
  BundleAnalyzerPlugin,
} = require('webpack-bundle-analyzer');

const common = require('./common');

module.exports = merge.smart(
  common,
  {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new BundleAnalyzerPlugin(),
      new WebpackBuildNotifier({
        title: 'Savr Build',
      }),
      new HardSourceWebpackPlugin(),
    ],
    watch: true,
  },
);
