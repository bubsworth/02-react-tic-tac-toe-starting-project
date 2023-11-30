/* eslint-disable */

module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  indentSize: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  bracketSpacing: true,
  jsxSingleQuote: false,
  endOfLine: "lf",
  organizeImportsSkipDestructiveCodeActions: true,

  overrides: [
    {
      files: "*.md",
      options: {
        printWidth: 1000,
      },
    },
  ],
};
