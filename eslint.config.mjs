import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  pluginJs.configs.recommended,
  {
    rules: {
      "no-undef": "off",
    },
    languageOptions: {
      globals: globals.node
    }
  },
];