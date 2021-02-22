// Load plugins
const { dest, series, src, task, watch } = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const webpackStream = require('webpack-stream');

const { webpack } = require('./config.json')

sass.compiler = require('node-sass');

/**
 * Style task
 */
function styles() {
  return src('../src/scss/*.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(dest('../dist/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
}

function stylesDemo() {
  return src('../demo/src/scss/*.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(dest('../dist/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
}

/**
 * Script task
 */
function scriptsDev() {
  return src('../src/js/luge.js')
    .pipe(webpackStream( require('./webpack.dev.js') ))
    .pipe(browserSync.reload({
      stream: true
    }));
}

function scriptsProd() {
  return src('../src/js/luge.js')
    .pipe(webpackStream( require('./webpack.prod.js') ))
    .pipe(dest('../dist/js/'));
}

/**
 * Watch task
 */
function serve(cb) {
  // Browser sync
  browserSync({
    proxy: webpack.serverAddress
  });

  // Watch .scss files
  watch('../src/**/*.scss', styles);
  watch('../demo/src/**/*.scss', stylesDemo);

  // Watch .js files
  watch('../src/**/*.js', scriptsDev);

  // Watch .html files
  watch(['../demo/*.php']).on('change', browserSync.reload);

  cb();
}

exports.build = series(styles, scriptsProd);
exports.default = serve;
