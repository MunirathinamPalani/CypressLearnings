const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/Training/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config){
      
    }
  }
});
