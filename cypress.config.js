
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Aqui você pode adicionar plugins futuramente se quiser
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true, // Altere para true para gerar o relatório em HTML
      json: true
    }
  },
  screenshotOnRunFailure: true,
  video: false
});

