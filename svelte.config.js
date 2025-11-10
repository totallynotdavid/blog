import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md", ".svx"],
  preprocess: [vitePreprocess(), mdsvex({ extensions: [".md", ".svx"] })],
  kit: {
    adapter: adapter({ pages: "build", assets: "build", fallback: "404.html" }),
    paths: {
      base: process.env.BASE_PATH || "",
      assets: process.env.BASE_PATH || "",
    },
  },
};

export default config;
