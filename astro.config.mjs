import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), tailwind({
    configFile: './tailwind.config.cjs'
  })]
});