// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import { FlatCompat } from "@eslint/eslintrc";
import reactRefresh from "eslint-plugin-react-refresh";

const compat = new FlatCompat({
  baseDirectory: new URL(".", import.meta.url).pathname,
});

export default [
  { ignores: ["dist", "build", "node_modules", "coverage"] },

  { settings: { react: { version: "detect" } } },

  js.configs.recommended,

  ...compat.extends(
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ),

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: "detect" } },

    plugins: { "react-refresh": reactRefresh },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_|^[A-Z_]+" },
      ],
      "react-refresh/only-export-components": "warn",
    },
  },
];
