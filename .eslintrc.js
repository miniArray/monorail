module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    "space-before-function-paren": ["error", "always"],
    "arrow-parens": ["error", "as-needed"],
    quotes: ["error", "single"],
    "indent": ["error", 2]
    // 'no-unused-vars': 'error'
  //   // "extends": "plugin:vue/base"
  }
}