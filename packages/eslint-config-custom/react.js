module.exports = {
  extends: [
    "./base.js",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  env: {
    browser: true,
    es2020: true,
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
