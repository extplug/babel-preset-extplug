# babel-preset-extplug

Babel preset for ExtPlug and plugins.

This includes ES2015 and some proposal plugins, targeting AMD or CommonJS
modules.

## Install

```sh
$ npm install --save-dev babel-preset-extplug
```

## Usage

In your `.babelrc`:

```js
{
  "presets": [
    ["extplug", { "amd": true|false }]
  ]
}
```

Because the preset can target AMD modules for plugins, it doesn't play nice with
a `gulpfile.babel.js`. This means that you can't put it in your `.babelrc` if
you also want to use ES-future in your gulpfile. Instead, put a config that
works for gulp in your `.babelrc`, and pass `babel-preset-extplug` to Babel
manually when you compile your plugin.

```js
// .babelrc
{
  "presets": [
    ["extplug", { "amd": false }]
  ]
}
```

```js
// gulpfile.babel.js
gulp.src(myPluginSources)
  .pipe(babel({
    babelrc: false,
    presets: [
      ['extplug', { amd: true }]
    ]
  }))
  .pipe(gulp.dest(builtPluginDirectory))
```

## License

[MIT](./LICENSE)
