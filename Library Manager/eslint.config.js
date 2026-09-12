import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node
      } 
    }
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",   // Avertit si une variable n'est pas utilisée
      "no-console": "off",        // Autorise les console.log
      "eqeqeq": "error"           // Force l'utilisation de === au lieu de ==
    }
  }
];