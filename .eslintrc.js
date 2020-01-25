module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:all",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": 2,
        "arrow-body-style": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
        "react/jsx-no-literals": "off",
        "react/jsx-one-expression-per-line": [2, { "allow": "single-child" }],
        "react/jsx-curly-newline": "off",
        "react/jsx-no-bind": "off",
        "no-extra-parens": [2, "all", {"ignoreJSX": "multi-line"}],
        "object-curly-spacing": [2, "always"],
        "one-var": "off",
        "implicit-arrow-linebreak": "off",
        "no-magic-numbers": "off",
        "padded-blocks": [2, "never", {"blocks": "never"}],
        "max-len": [2, {"code": 120}],
        "function-call-argument-newline": "off",
        "func-style": [2, "declaration", { "allowArrowFunctions": true }],
        "array-element-newline": 0,
        "max-lines-per-function": [2, { "max": 80, "skipBlankLines": true, "skipComments": true }],
        "prefer-destructuring":
            ["error", {
                "array": false,
                "object": true
            }],
        "sort-imports": [2, {
            "ignoreCase": true,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": [ "single", "all", "multiple", "none"]
        }],
        "quote-props": [2, "consistent-as-needed"]
    }
};