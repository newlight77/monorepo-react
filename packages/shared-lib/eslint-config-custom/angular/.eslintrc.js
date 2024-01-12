module.exports = {
  env: {
    "browser": true,
    "node": true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "turbo",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-unused-vars": 2,
    "import/no-anonymous-default-export": 0,
    "turbo/no-undeclared-env-vars": 0
  },
};
