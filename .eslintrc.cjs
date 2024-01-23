module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "react-app",
    "standard",
    "standard-react",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
