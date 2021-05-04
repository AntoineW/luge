// Load plugins
const { dest, series, src, task, watch } = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const del = require('del');
const zip = require('gulp-zip');

// Set constants
const p = require('../package.json');
const packageFolder = '../package';
const zipFilename = 'luge-' + String(p.version) + '.zip'
const { serverAddress } = require('./config.json')

sass.compiler = require('node-sass');

/**
 * Clean package folder
 */
 function cleanPackage(cb) {
  del.sync([packageFolder + '/*'], {force: true});

  cb();
}

/**
 * Create package
 */
function createPackage(cb) {
	src([
      'dist/css/luge.css',
      'dist/js/luge.js',
    ], {cwd: '../'})
		.pipe(zip(zipFilename))
		.pipe(dest(packageFolder))

    cb();
}

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
    .pipe(webpackStream( require('./webpack.dev.js'), webpack ))
    .pipe(dest('../dist/js/'))
    .pipe(browserSync.reload({
      stream: true
    }));
}

function scriptsProd() {
  return src('../src/js/luge.js')
    .pipe(webpackStream( require('./webpack.prod.js'), webpack ))
    .pipe(dest('../dist/js/'));
}

/**
 * Watch task
 */
function serve(cb) {
  // Browser sync
  browserSync({
    proxy: serverAddress
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
exports.package = series(cleanPackage, createPackage);
exports.default = serve;
