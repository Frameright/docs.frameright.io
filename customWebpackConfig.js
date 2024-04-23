module.exports = function (context, options) {
  return {
    name: 'custom-webpack-config',
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          // Workaround for
          // https://stackoverflow.com/questions/64926174/module-not-found-cant-resolve-fs-in-next-js-application
          fallback: {
            fs: false,
          },
        },
      };
    },
  };
};
