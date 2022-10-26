const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'v8hrc9',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.n1casino.com/game/erik-the-red'
  },
 

});
