module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["simple-import-sort"],
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:eslint-plugin-import/recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "@typescript-eslint/array-type": ["warn", { default: "array" }],
    "@typescript-eslint/no-shadow": "warn",
    "arrow-body-style": ["warn", "as-needed"],
    curly: "warn",
    "linebreak-style": ["error", "unix"],
    "import/no-named-as-default": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-restricted-imports": [
      "warn",
      {
        patterns: [
          {
            group: ["../*"],
            message:
              "You should avoid imports using relative paths. Use @/* instead.",
          },
        ],
      },
    ],
    "no-return-await": "warn",
    "no-shadow": "off",
    "promise/always-return": "off",
    "promise/catch-or-return": "off",
    "require-await": "warn",
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": "warn",
    "vue/attribute-hyphenation": ["warn", "always"],
    "vue/no-boolean-default": ["warn", "default-false"],
    "vue/component-name-in-template-casing": [
      "warn",
      "PascalCase",
      {
        registeredComponentsOnly: false,
      },
    ],
    "vue/block-order": [
      "warn",
      {
        order: ["script:not([setup])", "script[setup]", "template", "style"],
      },
    ],
    "vue/define-macros-order": [
      "warn",
      {
        order: ["defineProps", "defineEmits"],
      },
    ],
    "vue/custom-event-name-casing": ["warn", "camelCase"],
    "vue/no-unused-components": "warn",
    "vue/no-undef-components": "warn",
    "vue/v-bind-style": ["warn", "shorthand"],
    "vue/v-on-function-call": ["warn", "always"],
    "@typescript-eslint/no-unused-vars":
      process.env.NODE_ENV === "production" ? "error" : "warn",
    "vue/no-deprecated-slot-attribute": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
  },
};
