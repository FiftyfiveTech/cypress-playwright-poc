// global-setup.ts

import { FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  process.env.USERNAME = "user";
  // Or a more complicated data structure as JSON:
  process.env.PASS = "pass";
  process.env.STAGING = "";
}

export default globalSetup;
