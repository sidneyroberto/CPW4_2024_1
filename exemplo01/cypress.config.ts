import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
  },

  video: true,
  videoCompression: true,

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
