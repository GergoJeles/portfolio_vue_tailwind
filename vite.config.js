import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Adjust the alias mappings based on your project structure
      "@": path.resolve(__dirname, "./src"), // Assuming your source files are in the src directory
      "@views": path.resolve(__dirname, "./src/views"), // Alias for the views directory
      "@components": path.resolve(__dirname, "./src/components"), // Alias for the components directory
      // Add more aliases as needed
    },
  },
});
