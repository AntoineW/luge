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
function scripts() {
  return src('../src/js/luge.js')
    .pipe(webpackStream( require('./webpack.' + (process.env.NODE_ENV === 'production' ? 'prod' : 'dev') + '.js') ))
    .pipe(browserSync.reload({
      stream: true
    }));
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
  watch('../src/**/*.js', scripts);

  // Watch .html files
  watch(['../demo/*.html']).on('change', browserSync.reload);

  cb();
}

exports.build = series(styles, scripts);
exports.default = serve;
