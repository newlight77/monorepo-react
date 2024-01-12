module.exports = {
  env: {
    es6: true,
    "browser": true,
    "node": true
  },
  extends: [
    'eslint:recommended',
    "plugin:@typescript-eslint/recommended",
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    "plugin:react-hooks/recommended",
    'plugin:storybook/recommended',
    "turbo",
  ],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.build.json',
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    // 'react',
    'react-hooks',
    'jsx-a11y',
    'prettier',
    'testing-library',
    '@typescript-eslint/eslint-plugin'
  ],
  rules: {
    // "@typescript-eslint/explicit-function-return-type": ["error", {
    //   "allowExpressions": true,
    //   "allowTypedFunctionExpressions": true,
    //   "allowHigherOrderFunctions": true
    // }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      }
    ],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-unused-vars": 2,
    'arrow-body-style': 'off',
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore"
      }
    ],
    "import/no-anonymous-default-export": 0,
    'linebreak-style': 1,
    "no-confusing-arrow": "off",
    "no-plusplus": "off",
    'prefer-arrow-callback': 'off',
    "prettier/prettier": ["error", { "endOfLine": "auto" }, { usePrettierrc: true }],
    // "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    // "react/jsx-uses-react": 1,
    // "react/jsx-uses-vars": 1,
    // "react/react-in-jsx-scope": 1,
    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn",
    // "react/display-name": 0,
    // "react/prop-types": [0, { "ignore": ["children"] }],
    'testing-library/await-async-queries': 'error',
    "testing-library/no-await-sync-events": "error",
		'testing-library/no-await-sync-queries': 'error',
		'testing-library/no-debugging-utils': 'warn',
		'testing-library/no-dom-import': 'off',
    "testing-library/no-manual-cleanup": "error",
    "testing-library/prefer-screen-queries": "error",
    "turbo/no-undeclared-env-vars": 0
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
