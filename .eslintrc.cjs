module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        indent: "warn",
        "brace-style": ["warn", "stroustrup"],
        "linebreak-style": "warn",
        quotes: "warn",
        "space-before-function-paren": [
            "warn",
            {
                anonymous: "always",
                named: "never",
                asyncArrow: "always"
            }
        ],
        "arrow-spacing": "warn",
        "comma-spacing": "warn",
        "keyword-spacing": "warn",
        "object-curly-spacing": ["warn", "always"],
        "space-infix-ops": "warn",
        "@typescript-eslint/space-infix-ops": "warn",
        "space-unary-ops": "warn",
        semi: ["warn", "never"],
        "semi-spacing": "warn",
        "space-before-blocks": "warn",
        "@typescript-eslint/type-annotation-spacing": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "no-constant-condition": "off"
    }
}
