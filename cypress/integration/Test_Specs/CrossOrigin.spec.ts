/// <reference types='Cypress'/>

import {
  verifyCrossOrigin,
  visitCrossPage,
} from "../PageObjects/CrossHomePage";

describe("POC", function () {
  before(() => {
    visitCrossPage();
  });
  it("Cross origin", function () {
    verifyCrossOrigin();
  });
});
