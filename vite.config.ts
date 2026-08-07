import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const BASE_PATH = process.env.VITE_BASE_PATH ?? "/spirit-of-design/";

export default defineConfig({
  base: BASE_PATH,
  build: { outDir: "dist" },
  resolve: { tsconfigPaths: true },
  plugins: [react(), tailwindcss()],
});
