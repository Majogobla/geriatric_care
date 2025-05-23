import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://wwww.geriatriccaresv.com",
  integrations: [
    tailwind(),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
