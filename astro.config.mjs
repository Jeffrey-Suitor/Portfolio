import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://jeffrey-suitor.github.io",
  base: "/portfolio",
  integrations: [tailwind()],
});
