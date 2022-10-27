///  <reference types="Cypress"/>
import {
  fillPassword,
  fillUsername,
  submit,
  visit,
} from "../PageObjects/LoginPage";

describe("Automation for POC", function () {
  const thresholds = {
    performance: 20,
    "first-contentful-paint": 3000,
    "largest-contentful-paint": 3000,
    accessibility: 50,
    interactive: 5000,
    seo: 50,
    pwa: 10,
  };

  const lighthouseConfig = {
    formFactor: "desktop",
    screenEmulation: {
      disabled: true,
    },
  };

  before(() => {
    visit();
  });

  it("Verify Login with valid username and valid password", function () {
    (cy.get("body") as any).happoScreenshot({ component: "LoginScreen" });
    fillUsername(Cypress.env("username"));
    fillPassword(Cypress.env("password"));
    submit();
    (cy as any).lighthouse(thresholds, lighthouseConfig);
  });
});
