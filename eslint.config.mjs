import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next",
    "next/core-web-vitals",
    "next/typescript",
    "prettier"
  ),
  {
    plugins: ["unused-imports", "prettier", "react-hooks"],
    rules: {
      "no-unused-vars": "off",
      "no-console": ["warn", { allow: ["error"] }],
      "react-hooks/exhaustive-deps": "warn",
      "@next/next/no-img-element": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
];

export default eslintConfig;
