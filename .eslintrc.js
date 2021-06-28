module.exports = {
  parser: "@babel/eslint-parser",
  root: true,
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    browser: true,
  },
  extends: [
    'standard'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-this-before-super': 'off',
    'no-unused-vars': 'off',
    'space-before-function-paren': 'off'
  },
  globals: {
    'lottie': true,
    'VERSION': true
  }
}
