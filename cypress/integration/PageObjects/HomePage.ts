///  <reference types="Cypress"/>

import { clickOnText } from "../CommonUtils/commonMethod";
import { ACCEPT_ALL, DEMO_SITE } from "../CommonUtils/commonVariable";
let secondTabElement = "div[id='app']>div>div>div:nth-child(1)";

export const verifyMultiTab = () => {
  cy.wait(3000);
  clickOnText(ACCEPT_ALL);
  clickOnText(DEMO_SITE);
  cy.wait(3000);
  verifySecondTabElement();
};

export const verifySecondTabElement = () => {
  cy.get(secondTabElement).should("be.visible");
};

export const visitUrl = () => {
  cy.visit("https://toolsqa.com/");
};
