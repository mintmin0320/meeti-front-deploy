const { defineConfig } = require("cypress");

const baseUrl = 'http://localhost:3000';

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseUrl,
    },
  },
});
