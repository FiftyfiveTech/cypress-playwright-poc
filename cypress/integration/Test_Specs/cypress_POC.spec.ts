///  <reference types="Cypress"/>
import {
  fillPassword,
  fillUsername,
  submit,
  visit,
} from "../PageObjects/LoginPage";
describe("myUplink automation for POC", function () {
  const thresholds = {
    performance: 50,
    "first-contentful-paint": 2000,
    "largest-contentful-paint": 3000,
    accessibility: 80,
    interactive: 2000,
    seo: 60,
    pwa: 50,
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
