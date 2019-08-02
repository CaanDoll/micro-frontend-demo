// Temporary until we can use https://github.com/webpack/webpack-dev-server/pull/2143
const isProduction = process.env.NODE_ENV === 'production';

const devConfig = {
};

const prodConfig = {
  chainWebpack: config => {
    config.externals([
      'vue',
      'vue-router',
    ])
  },
  filenameHashing: false,
};

module.exports = isProduction ? prodConfig : devConfig;