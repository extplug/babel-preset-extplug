const defaultOptions = {
  modules: false,
  targets: {
    browsers: [
      'last 2 Chrome versions',
      'last 2 Firefox versions',
      'last 2 Edge versions',
    ],
  },
};

module.exports = function buildPreset(context, options) {
  const finalOptions = Object.assign({}, defaultOptions, options);
  return {
    presets: [
      [require('babel-preset-env'), finalOptions]
    ],
    plugins: [
      [require('babel-plugin-transform-class-properties'), { loose: finalOptions.loose }],
      require('babel-plugin-transform-decorators'),
      require('babel-plugin-transform-export-extensions'),
      require('babel-plugin-transform-object-rest-spread'),
      finalOptions.modules && require('babel-plugin-add-module-exports'),
    ].filter(Boolean),
  };
};
