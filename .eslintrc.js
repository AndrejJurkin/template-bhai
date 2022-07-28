module.exports = {
  root: true,

  extends: ["eslint:recommended"],
  env: {
    browser: true,
    node: true,
  },

  rules: {
    "no-undef": "warn",
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    semi: ["error", "always"],
    "comma-dangle": "warn",
  },

  parserOptions: {
    ecmaVersion: 2020,
  },

  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
