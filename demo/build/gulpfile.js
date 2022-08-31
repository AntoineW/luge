const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const rollup = require('rollup');
const { nodeResolve } = require( '@rollup/plugin-node-resolve');
const { babel } = require( '@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');

const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

// Reload
gulp.task('reload', function (done) {
  browserSync.reload('../dist/js/script.js');
  done();
})

// Script
gulp.task('js', function () {
  return rollup.rollup({
    input: '../src/js/script.js',
    plugins: [
      commonjs(),
      nodeResolve(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: [
          ['@babel/preset-env', {
            targets: '> 1%, not dead',
            corejs: 3,
            useBuiltIns: 'usage'
          }]
        ]
      })
    ]
  }).then(bundle => {
    return bundle.write({
      file: '../dist/js/script.js',
      format: 'iife',
      sourcemap: true
    });
  })
});

gulp.task('js-watch', gulp.series('js', 'reload'));

// Style
gulp.task('scss', function () {
  return gulp.src('../src/scss/*.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(
      {
        env: 'last 2 versions'
      }
    ))
    .pipe(gulp.dest('../dist/css/'))
    .pipe(browserSync.stream());
});

gulp.task('scss-watch', gulp.series('scss'));

// Watch
gulp.task('watch', function () {
  browserSync.init({
    proxy: 'luge-dev.wrk/demo/'
  });

  gulp.watch('../src/**/*.js', gulp.task('js-watch'));
  gulp.watch('../src/**/*.scss', gulp.task('scss-watch'));
  gulp.watch('../**/*.html', gulp.task('reload'));
  gulp.watch('../**/*.php', gulp.task('reload'));
  gulp.watch('../../dist/**/*', gulp.task('reload'));
});

// Default
gulp.task('default', gulp.series('js', 'scss', 'watch'))
gulp.task('build', gulp.series('js', 'scss'))
