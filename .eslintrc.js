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
        "react",
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
    rules: {
        // General.
        "max-len": ["warn", {
            "code": 150
        }],
        "linebreak-style": ["error", "unix"],
        "no-trailing-spaces": "warn",

        // Javascript.
        "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
        "prefer-const": "warn",

        "eqeqeq": ["warn", "always"],
        "require-await": "warn",

        "no-console": "warn",
        "no-debugger": "warn",
        "no-var": "warn",
        "no-restricted-syntax": ["error", "SequenceExpression"],
        "no-implicit-coercion": "warn",

        "semi-spacing": ["warn", { "before": false, "after": true }],
        "comma-spacing": ["warn", { "before": false, "after": true }],
        "block-spacing": "warn",
        "space-in-parens": ["warn", "never"],
        "key-spacing": ["warn", { beforeColon: false, afterColon: true, mode: "strict" }],
        "keyword-spacing": ["warn", { before: true, after: true }],
        "space-before-blocks": "warn",
        "arrow-spacing": ["warn", { before: true, after: true }],
        "array-bracket-spacing": "warn",

        "semi-style": ["warn", "last"],
        "comma-style": ["warn", "last"],
        "arrow-body-style": ["warn", "as-needed"],
        "function-paren-newline": ["warn", "consistent"],
        "function-call-argument-newline": ["warn", "consistent"],
        "prefer-arrow-callback": "error",
        "arrow-parens": ["warn", "always"],

        // Typescript.
        "@typescript-eslint/no-floating-promises": ["warn"],
        "@typescript-eslint/explicit-member-accessibility": ["warn"],
        "@typescript-eslint/no-inferrable-types": "warn",

        // Regular ESLint rules being replaced with Typescript equivalents.
        "semi": "off",
        "@typescript-eslint/semi": ["error"],
        "indent": "off",
        "@typescript-eslint/indent": ["warn", 4, {
            "SwitchCase": 1,
            "ignoredNodes": ["JSXAttribute", "JSXSpreadAttribute"]
        }],
        "quotes": "off",
        "@typescript-eslint/quotes": ["warn", "double"],
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
        "react/jsx-tag-spacing": ["warn", { "beforeClosing": "never" }],
        "react/jsx-curly-brace-presence": ["warn", "always"],
        "react/prop-types": "off",
        "react/jsx-wrap-multilines": ["warn", {
            "declaration": "parens-new-line",
            "assignment": "parens-new-line",
            "return": "parens-new-line",
            "arrow": "parens-new-line",
            "condition": "parens-new-line",
            "logical": "parens-new-line",
            "prop": "parens-new-line"
        }]
    }
};
