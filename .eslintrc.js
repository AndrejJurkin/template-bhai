module.exports = {
  root: true,

  extends: ["eslint:recommended"],
  env: {
    browser: true,
    node: true,
  },

  rules: {
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
    sourceType: "module",
    allowImportExportEverywhere: true,
  },

  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
