import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import imageComponents from "@astrojs/image";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), imageComponents(), compress(), sitemap(), prefetch(), react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});