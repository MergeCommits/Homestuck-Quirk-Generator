module.exports = {
    root: true,
    env: {
        node: true
    },
    parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        ecmaVersion: 2020,
        project: "./tsconfig.eslint.json"
    },
    plugins: [
        "@typescript-eslint",
        "react"
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    settings: {
        "react": {
            "version": "detect"
        }
    },
    ignorePatterns: ["**/*.d.ts"],
    rules: {
        // General.
        "max-len": ["warn", {
            "code": 150
        }],
        "linebreak-style": ["error", "unix"],

        // Javascript.
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
        "no-restricted-syntax": ["error", "SequenceExpression"],
        "eqeqeq": ["warn", "always"],
        "no-implicit-coercion": "warn",
        "require-await": "warn",
        "prefer-arrow-callback": "error",
        "arrow-parens": ["warn", "as-needed"],
        "function-paren-newline": ["warn", "multiline"],
        "function-call-argument-newline": ["warn", "consistent"],
        "arrow-body-style": ["warn", "as-needed"],

        // Typescript.
        "@typescript-eslint/no-floating-promises": ["warn"],
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

        // Regular ESLint rules being replaced with Typescript equivalents.
        "semi": "off",
        "@typescript-eslint/semi": ["error"],
        "indent": "off",
        "@typescript-eslint/indent": ["warn", 4, {
            "SwitchCase": 1,
            "ignoredNodes": ["JSXAttribute", "JSXSpreadAttribute", "JSXElement", "JSXElement *"]
        }],
        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": "warn",
        "object-curly-spacing": "off",
        "@typescript-eslint/object-curly-spacing": ["warn", "always"],

        // React
        "react/react-in-jsx-scope": "off", // React v17 doesn't require React import
        "react/no-unsafe": "error",
        "react/no-redundant-should-component-update": "error",
        "react/jsx-fragments": "warn",
        "react/jsx-max-props-per-line": [1, { "maximum": 3 }],
        "react/jsx-indent-props": ["warn", "first"],
        "react/jsx-closing-bracket-location": [1, "tag-aligned"],
        "react/jsx-tag-spacing": ["warn", { "beforeSelfClosing": "always" }],
    }
};
