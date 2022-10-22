/// <reference types='Cypress'/>

export const longWaitMs = "30000";
export const shortWaitMs = "20000";
export const resetFilter = "span[class='filters']";

export const clickOn = (element: any) => {
  cy.get(element).click({ force: true });
};

export const clickOnText = (text: string | number | RegExp) => {
  cy.contains(text).click({ force: true });
};

export const fillText = (element: any, data: string) => {
  cy.get(element).clear({ force: true }).type(data);
};

export const clickContainingText = (
  element: any,
  text: string | number | RegExp
) => {
  cy.get(element).contains(text).click({ force: true });
};

export const elementHavingTextShldPrsnt = (
  element: any,
  text: string | number | RegExp
) => {
  cy.get(element).contains(text).should("exist");
};

export const elementHavingTextShldNotPrsnt = (
  element: any,
  text: string | number | RegExp
) => {
  cy.get(element).contains(text).should("not.exist");
};

export const elementHavingTextShldExist = (
  element: any,
  text: string | number | RegExp
) => {
  cy.get(element).contains(text).should("exist");
};

export const elementShldPrsnt = (element: any) => {
  cy.get(element).should("be.visible");
};

export const textShldPrsnt = (text: string | number | RegExp) => {
  cy.contains(text).should("be.visible");
};

export const textShldExist = (text: string | number | RegExp) => {
  cy.contains(text).should("exist");
};
