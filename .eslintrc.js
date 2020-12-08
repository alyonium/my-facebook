module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-curly-spacing': [
      'error',
      'never'
    ],
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreStrings: true
      }
    ],
    'max-lines': [
      'warn',
      300
    ],
    'comma-dangle': 0,
    'arrow-parens': 0,
    'import/no-deprecated': 'warn',
    'import/prefer-default-export': 0,
    'max-classes-per-file': 0,
    'import/no-extraneous-dependencies': 1,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "vue": "never",
        "js": "never"
      }
    ],
  },
};
