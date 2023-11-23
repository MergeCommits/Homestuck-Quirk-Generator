/** @type {import('prettier').Config} */
const config = {
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
            files: "*.{md,yml}",
            options: {
                tabWidth: 2,
            },
        },
        {
            files: ".env.*",
            options: {
                parser: "sh",
            },
        },
    ],
    plugins: ["prettier-plugin-pkg"],
};

export default config;
