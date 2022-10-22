import config from "./config";
import { RemoteBrowserTarget } from "happo.io";

module.exports = {
  apiKey: config.development.happoAPISecret,
  apiSecret: config.development.happoAPIKey,
  targets: {
    chrome: new RemoteBrowserTarget("chrome", {
      viewport: "1024x768",
    }),
  },
};
