import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import imageComponents from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    imageComponents(),
    sitemap(),
    prefetch(),
    react(),
    compress(),
  ],
  output: "server",
  adapter: vercel(),
  site: "https://10mblogs.xyz",
});
