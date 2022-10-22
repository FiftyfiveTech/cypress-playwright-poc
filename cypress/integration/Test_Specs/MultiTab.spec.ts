/// <reference types='Cypress'/>

import { verifyMultiTab, visitUrl } from "../PageObjects/HomePage";
import { visit } from "../PageObjects/LoginPage";

describe('POC', function () {
    before(() => {
        visitUrl();
    })
    it('Multi tab', function () {
       verifyMultiTab();
    });
})