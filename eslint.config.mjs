// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import typescriptParser from "@typescript-eslint/parser";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default tseslint.config(
    {
        extends: [
            eslint.configs.recommended,
            tseslint.configs.strictTypeChecked,
            tseslint.configs.stylisticTypeChecked,
        ],
        rules: {
            "@typescript-eslint/explicit-member-accessibility": "error",
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/consistent-type-imports": "error",
        },
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
            parser: typescriptParser,
        },
        ignores: ["./eslint.config.mjs"],
        files: ["src/**/*.ts"],
    },
    eslintPluginPrettier,
);
