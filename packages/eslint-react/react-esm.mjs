import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import pluginUnusedImports from "eslint-plugin-unused-imports";

export default [
  {
    settings: {
      react: {
        version: "detect"
      }
    },
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: {
      "react-hooks": pluginReactHooks,
      "react-refresh": pluginReactRefresh,
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/self-closing-comp": ["error", {
        "component": true,
        "html": true
      }],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "indent": ["error", 2],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "semi": ["error", "always"],
      "react/display-name": "off",
      "react/react-in-jsx-scope": "off",
    },
    ignores: ["dist", ".eslintrc.cjs"],
  },
];
