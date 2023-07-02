module.exports = function (context, options) {
  return {
    name: 'custom-webpack-config',
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          // FIXME workaround for
          // https://github.com/Frameright/image-display-control-metadata-parser/issues/3
          alias: {
            path: require.resolve('path-browserify'),
          },
          fallback: {
            fs: false,
          },
        },
      };
    },
  };
};
