import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierPluginRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import { configs as reactHooksConfigs } from "eslint-plugin-react-hooks";
import { FlatCompat } from "@eslint/eslintrc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactRefresh from "eslint-plugin-react-refresh";

const compat = new FlatCompat();

export default tseslint.config(
  eslint.configs.recommended,
  ...compat.extends("eslint-config-standard"),
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  jsxA11y.flatConfigs.recommended,
  prettierPluginRecommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        tsconfigRootDir: import.meta.dirname,
        project: ["tsconfig.node.json", "tsconfig.app.json"],
      },
      globals: { ...globals.browser },
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksConfigs,
      "react-refresh": reactRefresh,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...reactHooksConfigs.recommended.rules,
      "prettier/prettier": "warn",
      "react-refresh/only-export-components": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      camelcase: "off",
    },
  }
);
