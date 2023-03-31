module.exports = {
  parser: '@babel/eslint-parser',
  root: true,
  parserOptions: {
    requireConfigFile: false
  },
  env: {
    browser: true
  },
  plugins: [
    'tree-shaking'
  ],
  extends: [
    'standard'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-this-before-super': 'off',
    'no-unused-vars': 'off',
    'tree-shaking/no-side-effects-in-initialization': 2,
    'space-before-function-paren': 'off'
  },
  globals: {
    lottie: true,
    VERSION: true
  }
}
