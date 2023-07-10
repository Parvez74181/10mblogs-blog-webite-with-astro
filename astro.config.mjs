import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import imageComponents from "@astrojs/image";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    imageComponents(),
    compress(),
    sitemap(),
    prefetch(),
    react(),
  ],
  output: "server",
  adapter: vercel(),
  site: "https://10mblogs.xyz",
});
