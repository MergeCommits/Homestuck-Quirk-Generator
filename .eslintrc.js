module.exports = {
    root: true,
    env: {
        node: true
    },
    parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        ecmaVersion: 2020,
        project: "./tsconfig.json"
    },
    ignorePatterns: ["src/types/**/*.d.ts"],
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
        "no-console": "warn",
        "no-debugger": "warn",
        "quotes": ["warn", "double"],
        "prefer-const": "warn",
        "no-var": "warn",
        "semi-spacing": ["warn", { "before": false, "after": true }],
        "semi-style": ["warn", "last"],
        "comma-style": ["warn", "last"],
        "comma-spacing": ["warn", { "before": false, "after": true }],
        "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
        "space-in-parens": ["warn", "never"],
        "block-spacing": "warn",
        "array-bracket-spacing": "warn",
        "key-spacing": ["warn", { beforeColon: false, afterColon: true, mode: "strict" }],
        "keyword-spacing": ["warn", { before: true, after: true }],
        "arrow-spacing": ["warn", { before: true, after: true }],
        "space-before-blocks": "warn",
        "object-curly-spacing": ["warn", "always"],
        "no-restricted-syntax": ["error", "SequenceExpression"],
        "eqeqeq": ["warn", "always"],
        "no-implicit-coercion": "warn",
        "require-await": "warn",
        "@typescript-eslint/no-floating-promises": ["warn"],

        "semi": "off", // Replacing with typescript's own lint rule.
        "@typescript-eslint/semi": ["error"],
        "indent": "off",
        "@typescript-eslint/indent": ["warn", 4, { "SwitchCase": 1, "ignoredNodes": ["JSXAttribute", "JSXSpreadAttribute"] }],
        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": "warn",
        "no-extra-boolean-cast": "off",
        "@typescript-eslint/strict-boolean-expressions": ["warn", {
            allowString: false,
            allowNumber: false,
            allowNullableObject: false,
            allowNullableBoolean: false,
            allowNullableString: false,
            allowNullableNumber: false,
            allowAny: false,
        }],

        "@typescript-eslint/explicit-member-accessibility": ["warn"],
        "@typescript-eslint/no-inferrable-types": "warn",
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "unknown": "Avoid using unknown as much as possible.",
                    "never": "Avoid using never as much as possible.",
                }
            }
        ],

        // React
        "react/no-unsafe": "error",
        "react/no-redundant-should-component-update": "error",
        "react/jsx-fragments": "warn",
        "react/jsx-max-props-per-line": [1, { "maximum": 3 }],
        "react/jsx-indent-props": ["warn", "first"],
        "react/jsx-closing-bracket-location": [1, "tag-aligned"],
        "react/jsx-tag-spacing": ["warn", { "beforeSelfClosing": "always" }],
    }
};
