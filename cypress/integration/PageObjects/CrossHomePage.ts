///  <reference types="Cypress"/>

import { clickOn, clickOnText } from "../CommonUtils/commonMethod";
import { ACCEPT_ALL, linkedInUrl } from "../CommonUtils/commonVariable";
const linkeInLink="div[id='custom_html-4']>div>div>div:nth-child(2)>ul>li:nth-child(3)>a";

export const verifyCrossOrigin=()=>
{
    cy.wait(3000);
    clickOnText(ACCEPT_ALL);
    cy.scrollTo('bottom');
    selectLinkedIn();
    cy.wait(2000);
    verifyLinkedInPage();
}
export const visitCrossPage=()=>
{
    cy.visit("https://www.fiftyfivetech.io/");
}
export const selectLinkedIn=()=>
{
 clickOn(linkeInLink);
}
export const verifyLinkedInPage=()=>
{
    cy.url().should('include',linkedInUrl);
}