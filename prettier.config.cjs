/** @type {import("prettier").Config} */
module.exports = {
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: false,
    jsxSingleQuote: false,
    quoteProps: "as-needed",
    trailingComma: "es5",
    bracketSpacing: true,
    arrowParens: "always",
    endOfLine: "lf",
    embeddedLanguageFormatting: "auto",
    overrides: [
        {
            files: "*.md",
            options: {
                tabWidth: 2,
            },
        },
    ],
};
