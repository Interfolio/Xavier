module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true
  },
  globals: {
    browser: 'readonly',
    describe: 'readonly',
    it: 'readonly',
    before: 'readonly',
    beforeEach: 'readonly',
    after: 'readonly',
    afterEach: 'readonly'
  },
  plugins: ['wdio', 'filenames'],
  extends: ['eslint:recommended', 'plugin:wdio/recommended'],
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    'filenames/match-regex': 'off',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'never'
    ],
    'no-debugger': [
      'error'
    ],
    'no-console': [
      'error',
      {
        allow: [
          'debug',
          'warn',
          'error',
          'info'
        ]
      }
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          if: {
            after: false
          },
          while: {
            after: false
          },
          for: {
            after: false
          },
          catch: {
            after: false
          },
          switch: {
            after: false
          },
          case: {
            after: true
          }
        }
      }
    ],
    'space-in-parens': [
      'error',
      'never'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'space-before-blocks': [
      'error'
    ],
    'block-spacing': [
      'error',
      'always'
    ],
    'template-curly-spacing': [
      'error',
      'never'
    ],
    curly: [
      'error'
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'comma-style': [
      'error',
      'last'
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'no-trailing-spaces': 'error',
    'space-infix-ops': 'error'
  }
}