const path = require('path')
const gulp = require('gulp')

const rollup = require('rollup')
const alias = require('@rollup/plugin-alias')
const { babel } = require('@rollup/plugin-babel')
const eslint = require('@rollup/plugin-eslint')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const replace = require('@rollup/plugin-replace')
const commonjs = require('@rollup/plugin-commonjs')
const terser = require('@rollup/plugin-terser')

const sass = require('gulp-sass')(require('node-sass'))
const sassGlob = require('gulp-sass-glob')
const autoprefixer = require('gulp-autoprefixer')

const _package = require('../package.json')

// Script
const rollupConfig = {
  input: '../src/js/luge.js',
  plugins: [
    eslint(),
    alias({
      entries: [
        { find: 'Luge', replacement: path.resolve(__dirname, '../src/js/luge/') },
        { find: 'Core', replacement: path.resolve(__dirname, '../src/js/luge/core/') },
        { find: 'Plugins', replacement: path.resolve(__dirname, '../src/js/luge/plugins/') }
      ]
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: [
        /node_modules/,
        /\/core-js\//
      ],
      presets: [
        ['@babel/preset-env', {
          targets: '> 1%, not dead',
          corejs: {
            version: '3.15.2',
            proposals: true
          },
          useBuiltIns: 'usage'
        }]
      ],
      plugins: ['@babel/plugin-proposal-nullish-coalescing-operator']
    }),
    nodeResolve(),
    commonjs(),
    replace({
      preventAssignment: true,
      VERSION: JSON.stringify(_package.version)
    }),
    terser()
  ]
}

const writeUmd = {
  file: '../dist/js/luge.js',
  format: 'umd',
  name: 'luge'
}

const writeEsm = {
  file: '../dist/js/luge.esm.js',
  format: 'es',
  name: 'luge'
}

gulp.task('js', function (done) {
  return rollup.rollup(rollupConfig)
    .then(bundle => {
      bundle.write(writeUmd)
      bundle.write(writeEsm)

      done()
    })
})

gulp.task('js-dev', function (done) {
  return rollup.rollup(rollupConfig)
    .then(bundle => {
      bundle.write({ ...writeUmd, sourcemap: true })

      done()
    })
})

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
})

// Watch
gulp.task('watch', function () {
  gulp.watch('../src/**/*.js', gulp.task('js-dev'))
  gulp.watch('../src/**/*.scss', gulp.task('scss'))
})

// Default
gulp.task('default', gulp.series('js', 'scss'))
gulp.task('dev', gulp.series('js-dev', 'scss', 'watch'))
