const defaultOptions = {
  modules: false,
};

module.exports = function buildPreset(context, options) {
  return {
    presets: [
      [require('babel-preset-latest'), {
        es2015: Object.assign({}, defaultOptions, options),
      }],
    ],
    plugins: [
      require('babel-plugin-transform-class-properties'),
      require('babel-plugin-transform-decorators'),
      require('babel-plugin-transform-export-extensions'),
      require('babel-plugin-transform-object-rest-spread'),
      require('babel-plugin-add-module-exports'),
    ],
  };
};
