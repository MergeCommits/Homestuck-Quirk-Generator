module.exports = {
    root: true,
    env: {
        node: true
    },
    parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        ecmaVersion: 2020
    },
    plugins: [
        "@typescript-eslint",
        "react"
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    settings: {
        "react": {
            "version": "detect"
        }
    },
    rules: {
        // General.
        "max-len": ["warn", {
            "code": 150
        }],
        "linebreak-style": ["error", "unix"],

        // Typescript.
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "indent": ["warn", 4],
        "quotes": ["warn", "double"],
        "prefer-const": "warn",
        "no-var": "warn",
        "@typescript-eslint/explicit-member-accessibility": ["warn"],
        "@typescript-eslint/no-inferrable-types": "warn",
        "semi": "off", // Replacing with typescript's own lint rule.
        "@typescript-eslint/semi": ["error"],
        "semi-spacing": ["warn", { "before": false, "after": true }],
        "semi-style": ["warn", "last"],
        "comma-style": ["warn", "last"],
        "comma-spacing": ["warn", { "before": false, "after": true }],
        "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
        "space-in-parens": ["warn", "never"],
        "block-spacing": "warn",
        "keyword-spacing": ["warn", { before: true, after: true }],
        "space-before-blocks": "warn",
        "object-curly-spacing": ["warn", "always"],
        "no-restricted-syntax": ["error", "SequenceExpression"],
        "eqeqeq": ["warn", "always"],

        // React
        "react/no-unsafe": "error",
        "react/no-redundant-should-component-update": "error",
        "react/jsx-fragments": "warn",
        "react/jsx-first-prop-new-line": ["warn", "multiline"],
        "react/jsx-max-props-per-line": [1, { "maximum": 3 }],
        "react/jsx-indent-props": "warn",
    }
};
