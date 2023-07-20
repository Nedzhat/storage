import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    // base: command === "build" ? "/storage/dist/" : "/",
    // build: {
    //   brotliSize: false,
    //   manifest: false,
    //   minify: mode === "development" ? false : "terser",
    //   outDir: "dist",
    //   sourcemap: command === "serve" ? "inline" : false,

    //   rollupOptions: {
    //     output: {
    //       assetFileNames: "https://nedzhat.github.io/storage/dist/assets",
    //       entryFileNames: "https://nedzhat.github.io/storage/index.js",
    //     },
    //   },
    // },
    plugins: [react()],
    define: {
      "process.env": process.env,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  });
};
