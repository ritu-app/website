import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    files: [
      "src/components/logo.tsx",
      "src/components/home-page.tsx",
      "src/components/faq-list.tsx",
      "src/components/site-footer.tsx",
      "src/components/site-header.tsx",
      "src/components/store-badges.tsx",
      "src/components/feature-carousel.tsx",
    ],
    rules: {
      // Figma SVGs keep their authored width and height. next/image rescales them.
      "@next/next/no-img-element": "off",
    },
  },
]);

export default eslintConfig;
