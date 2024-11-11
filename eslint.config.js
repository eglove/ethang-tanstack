import config from "@ethang/eslint-config/eslint.config.js";
import tseslint from "typescript-eslint";
import reactConfig from "@ethang/eslint-config/config.react.js";

export default tseslint.config(
    {
        ignores: ["src/routeTree.gen.ts"],
    },
    ...config,
    ...reactConfig,
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            "barrel/avoid-importing-barrel-files": "off",
            "n/no-extraneous-import": "off",
        },
    },
);