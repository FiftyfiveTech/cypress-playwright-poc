/// <reference types='Cypress'/>

import { verifyCrossOrigin, visitCrossPage } from "../PageObjects/CrossHomePage";
import { visit } from "../PageObjects/LoginPage";

describe('POC', function () {
    before(() => {
        visitCrossPage();
    })
    it('Cross origin', function () {
       verifyCrossOrigin();
    });
})