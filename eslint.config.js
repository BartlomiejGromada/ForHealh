// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
    rules: {
      "import/order": 0,
      "react-native/no-inline-styles": 0,
      "import/namespace": 0,
      "no-duplicate-imports": "warn",
    },
  },
]);
