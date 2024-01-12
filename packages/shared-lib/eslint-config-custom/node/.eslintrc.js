module.exports = {
  env: {
    "jest": true,
    "node": true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "turbo",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-unused-vars": 2,
    "import/no-anonymous-default-export": 0,
    "turbo/no-undeclared-env-vars": 0
  },
};
