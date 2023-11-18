module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react"],
  rules: {
    //
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
