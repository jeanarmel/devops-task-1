import js from "@eslint/js";
import globals from "globals";

export default [
    // 1. Use the recommended ESLint rules
    js.configs.recommended,

    {
        // 2. Specify which files this config applies to
        files: ["**/*.js"],

        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            // 3. Define environment globals (replacing "env: { node: true }")
            globals: {
                ...globals.node,
                ...globals.express,
            },
        },

        // 4. Custom Rules
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off", // Keep console logs for your server.js
            "prefer-const": "error"
        },
    },

    // 5. Ignore specific folders (replacing .eslintignore)
    {
        ignores: ["node_modules/", "dist/", "images/"]
    }
];