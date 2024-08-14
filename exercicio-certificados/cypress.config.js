const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://certificadosfeciaq2022.vercel.app",
    setupNodeEvents(on, config) {
      on("task", { downloadFile });
    },
  },
});
