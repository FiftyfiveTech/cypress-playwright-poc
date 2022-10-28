/// <reference types='Cypress'/>

import { verifyMultiTab, visitUrl } from "../PageObjects/HomePage";

describe("POC", function () {
  before(() => {
    visitUrl();
  });
  it("Multi tab", function () {
    verifyMultiTab();
  });
});
