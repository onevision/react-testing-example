import { defineConfig } from "cypress";
import cypressMochawesomePlugin from "cypress-mochawesome-reporter/plugin";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      cypressMochawesomePlugin(on);
    },
  },
});
