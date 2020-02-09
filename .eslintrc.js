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
        "@typescript-eslint/interface-name-prefix": [2, { "prefixWithI": "always" }],
        "arrow-body-style": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
        "react/jsx-one-expression-per-line": [0, { "allow": "single-child" }],
        "react/jsx-no-literals": "off",
        "react/jsx-curly-newline": "off",
        "react/jsx-no-bind": "off",
        "no-extra-parens": [2, "all", {"ignoreJSX": "multi-line"}],
        "no-implicit-coercion": [1, {"allow": ["!!"]}],
        "no-ternary": 0,
        "no-console": 1,
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "no-process-env": 0,
        "no-magic-numbers": "off",
        "object-curly-spacing": [2, "always"],
        "object-property-newline": [ 2, { "allowAllPropertiesOnSameLine": true }],
        "one-var": "off",
        "implicit-arrow-linebreak": "off",
        "padded-blocks": [2, "never", {"blocks": "never"}],
        "max-len": [2, {"code": 120}],
        "max-lines-per-function": ["error", { "max": 80, "skipBlankLines": true, "skipComments": true }],
        "function-call-argument-newline": "off",
        "func-style": [2, "declaration", { "allowArrowFunctions": true }],
        "array-element-newline": 0,
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
        "quote-props": [2, "as-needed"],
        "multiline-ternary": 0,
        "multiline-comment-style": [1, "bare-block"],
        "capitalized-comments": [2, "always", { "ignoreConsecutiveComments": true }],
        "id-length": 0,
        "dot-location": ["error", "property"],
        "no-undefined": 0,
        "no-underscore-dangle": 0,
        "prefer-named-capture-group": 0,
        "require-unicode-regexp": 0
    },
    "ignorePatterns": ["babel.config.js", "node_modules/", "src/style/", "src/typing/"],
};