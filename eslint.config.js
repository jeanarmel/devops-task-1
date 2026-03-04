const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
    // Use recommended rules
    js.configs.recommended,

    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs", // Since you use require()
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

    {
        ignores: ["node_modules/", "dist/", "images/"]
    }
];