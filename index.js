function buildPreset(context, options) {
  var plugins = [
    // stage 1
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-decorators'),
    require('babel-plugin-transform-export-extensions'),
    // stage 2
    require('babel-plugin-syntax-trailing-function-commas'),
    require('babel-plugin-transform-object-rest-spread'),
    // stage 3
    require('babel-plugin-transform-exponentiation-operator'),
    // extra
    require('babel-plugin-add-module-exports'),
    // es2015
    require('babel-plugin-transform-es2015-template-literals'),
    require('babel-plugin-transform-es2015-literals'),
    require('babel-plugin-transform-es2015-function-name'),
    require('babel-plugin-transform-es2015-arrow-functions'),
    require('babel-plugin-transform-es2015-block-scoped-functions'),
    require('babel-plugin-transform-es2015-classes'),
    require('babel-plugin-transform-es2015-object-super'),
    require('babel-plugin-transform-es2015-shorthand-properties'),
    require('babel-plugin-transform-es2015-computed-properties'),
    require('babel-plugin-transform-es2015-for-of'),
    require('babel-plugin-transform-es2015-sticky-regex'),
    require('babel-plugin-transform-es2015-unicode-regex'),
    require('babel-plugin-check-es2015-constants'),
    require('babel-plugin-transform-es2015-spread'),
    require('babel-plugin-transform-es2015-parameters'),
    require('babel-plugin-transform-es2015-destructuring'),
    require('babel-plugin-transform-es2015-block-scoping'),
    require('babel-plugin-transform-es2015-typeof-symbol'),
    require('babel-plugin-transform-regenerator'),
  ];

  if (options && options.amd === false) {
    plugins.push(require('babel-plugin-transform-es2015-modules-commonjs'));
  } else {
    plugins.push(require('babel-plugin-transform-es2015-modules-amd'));
  }

  return { plugins: plugins };
}

module.exports = buildPreset({ amd: true });
module.exports.buildPreset = buildPreset;
