// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Your main entry point (e.g., home page)
        about: resolve(__dirname, "pages","about.html"), // Additional HTML pages
        contact: resolve(__dirname, "pages", "contact.html"),
        products: resolve(__dirname, "pages", "products.html"),
        addToCart: resolve(__dirname, "pages", "addToCart.html"),
        // Add more entry points for other HTML files as needed
      },
    },
  },
});