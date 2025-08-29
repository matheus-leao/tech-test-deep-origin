import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://dummyjson.com/",
    responseTimeout: 2000
  },
  projectId: "2hfua5",
});
