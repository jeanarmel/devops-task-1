const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
    js.configs.recommended,

    // 1. General configuration for all JavaScript files
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
            globals: {
                ...globals.node,
                ...globals.express,
            },
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off",
        },
    },

    // 2. SPECIFIC CONFIG FOR TESTS (This fixes your errors)
    {
        files: ["tests/**/*.test.js", "tests/**/*.spec.js", "tests/app.test.js"],
        languageOptions: {
            globals: {
                ...globals.jest, // Adds describe, test, expect, it, etc.
            },
        },
    },

    // 3. Folders to ignore
    {
        ignores: ["node_modules/", "dist/", "images/"]
    }
];