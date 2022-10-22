///  <reference types="Cypress"/>
import { clickOn, fillText } from "../CommonUtils/commonMethod";

const userNameField = "input[id='username']";
const passwordField = "input[id='password']";
const loginButton = "input[id='Login']";

export const visit = () => {
  cy.visit(Cypress.env("baseUrl"));
};

export const fillUsername = (userName: string) => {
  fillText(userNameField, userName);
  return this;
};

export const fillPassword = (password: string) => {
  fillText(passwordField, password);
  return this;
};

export const submit = () => {
  // click on login button
  clickOn(loginButton);
};
