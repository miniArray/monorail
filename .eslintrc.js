module.exports = {
  plugins: [
    'security',
  ],
  extends: [
    'plugin:vue/recommended',
    'plugin:security/recommended',
    'eslint:recommended',
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    'indent': ['error', 2],
    'space-before-function-paren': ['error', 'always'],
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'no-unused-vars': 'error',
    semi: ['error', 'never']
  }
}