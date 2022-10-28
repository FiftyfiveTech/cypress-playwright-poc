///  <reference types="Cypress"/>

import { clickOn } from "../CommonUtils/commonMethod";
import { FB_URL } from "../CommonUtils/commonVariable";

const facebookLink =
  "table[class='infobox vcard']>tbody>tr:nth-child(11)>td>span>a";

export const verifyCrossOrigin = () => {
  cy.wait(3000);
  selectFacebook();
  cy.wait(2000);
  verifyFacebookPage();
};

export const visitCrossPage = () => {
  cy.visit("https://en.wikipedia.org/wiki/Facebook");
};

export const selectFacebook = () => {
  clickOn(facebookLink);
};

export const verifyFacebookPage = () => {
  cy.url().should("include", FB_URL);
};
