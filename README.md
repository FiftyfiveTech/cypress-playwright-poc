# cypress-playwright-poc
[![N|Solid](https://www.fiftyfivetech.io/wp-content/uploads/2021/05/logo.png)](https://www.fiftyfivetech.io/)

✨ This repository showing that how we can use Cypress and Playwright automation tools together based on testing requirement.

## Objective
Objective of this POC is to collaboratively use well known e2e automation tools Cypress and Playwright. Collaborative usage should provide flexibility to developers to use scripts depending on test requirement and switch tool in case there is short coming in one the tools under evaluation.

## Requirement
Following are key high level requirements of this POC:
- Use automation tools cypress and playwright in an automation project.
- Type script should be used for development purpose.
- Integrate Happo.io for visual verification.
- Evaluate performance of the page while testing.Used lighthouse for perfrmance testing.
- Scripts should run from CLI.
- It should be possible to use same script for different environments where system details and login details can be passed on runtime.
- Indentify cases where one of the tool can't be used and another one can compliment the scenario.

## Tech

- [Cypress](https://docs.cypress.io/): Cypress is a next generation front end testing tool built for the modern web.

- [Playwright](https://playwright.dev/): Playwright enables reliable end-to-end testing for modern web apps. · Any browser • Any platform • One API · Resilient • No flaky tests · No trade-offs • No limits.

- [Happo](https://happo.io/): Happo is a cross-browser screenshot testing service. Prevent visual regressions, visualize your UI changes, and keep a visual log of your UI.

- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/): Google Lighthouse is an open-source, automated tool for measuring the quality of web pages.

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.



## Installation

Requires [Node.js](https://nodejs.org/)  to run.

Install the dependencies and devDependencies.

```sh
cd cypress-playwright-poc
npm i or npm install
```

### Package manager - npm
This project is using `npm` as package manager, if you do not have this installed on your machine please start by looking at the [npm docuentation and tutorials](https://docs.npmjs.com/). After installing the package manager the following commands will be availible for you:
- `npm install` - Installing dev dependencies unless `mode=production`

If you seem to still have issues with these commands, try running `npm cache clean` and do `npm install` or `npm install --legacy-peer-deps`

### Linting
Project is using ESLint to make sure that we keep same coding style in the project. Currently the ruleset is defined in `.eslintrc.json`.

## Design and Project structure

This project is using Page Object Model, a design pattern used for enhancing test maintenance and reducing code duplication. 

This project is structured in the following way:

```
├───config/
│   ├───config.ts
│   └───index.ts
├───cypress/
│   ├───integration/
│   ├───fixtures
│   └───plugin
├───myTests/
│   ├───crossDomain.spec.ts
│   ├───multitab.spec.ts
│   └───salesForce.spec.ts
├───pages/
│   ├───demoSite.page.ts
│   ├───wiki.page.ts
│   └───login.page.ts
├───playwright-report/
│   └───index.html
├───.env
├───.eslintrc.json
├───.happo.ts
├───README.md
├───global-setup.ts
├───package-lock.json
├───package.json
├───playwright.config.ts
├───prettierrc.json
├───stage-config.json
└───tsconfig.json
```

**cypress** - This is a default folder structure  created in installation for cypress.

- integration: folder for managing test cases.

- integration/pageobjects: folder for managing page objects.

- fixtures: folder for mantaining data files for test cases.

**myTests** - entry level folder for playwright test scripts. This is can be changed and configured in playwright.config.ts.

**pages** - A custom folder added for playwright for managing page objects.

**playwright-report** - A default playwright folder where test execution report is generated as index.html.

**.env** - Custom file added for managing enviroment specific details like server, dev or staging along with username and password.

```
USER_NAME="<salesForceUser>"
PASS="<salesForcePassword>"
HAPPO_ENABLED=true
HAPPO_API_SECRET="<happoSecret>"
HAPPO_API_KEY="<happoAPIKey>"
```

**.happo.ts** - This file is used for managing happo plugins configuration (key, secret and screenshot config etc).

**global-setup.ts** - This file is used by playwright for environment specific variables.

**playwright.config.ts** - This is a configuration file for managing playwright configurations.

**tsconfig.json** - This is used to configure typescript compiler options and also to specify the root files for the project.

**Stage-config.json** - Add a new file named Stage-config.json at project level which contains baseUrl, username and password where you have to pass your username and password.

```json
{
   "extends": "./cypress.json",
   "env": {
    "baseUrl": "https://login.salesforce.com/?locale=in",
    "username": "*****",
    "password": "*****"
  }
}
```

**Cypress.json**: Add values for default username and password into cypress.jaon file as follows :

```json
 "env": {
    "baseUrl": "https://login.salesforce.com/?locale=in",
    "username": "*****",
    "password": "*****"
  },
```

**commonMethod.ts**:  This file contains customized common methods which are used in cypress test cases such as , clickOn(), fillText() etc.

**commonVariables.ts**: This file contains all the common variables which are used in cypress test cases.

**PageObjects**:  This folder contains all the page object files such as LoginPage.ts, HomePage.ts.

**Test-specs**: This folder contains all the test suits of cypress such as cypress_POC.spec.ts and MultiTab.spec.ts

## Scenarios
For purpose of evalauation of tool capabilities and integration with third party plugins, following scenarions are automated:

**Scenario 1:** User login to salesforce website. User should be able to login to salesforce website using different URLs and different user credentials. While execution of script environment details can be passed from CLI. Also demos integration of Happo.io for visual verification and integration of lighthouse for performance testing of page.

**Scenario 2:** Cross origin verification, user opens facebook's wiki page(https://en.wikipedia.org/wiki/Facebook in our case). Click on facebook website link and verify that user is directed to facebook's home page.

**Scenario 3:** Multitab testing, user opens a website(https://www.toolsqa.com/, in our case). Click on "Demo site" link which opens a new website in new tab.

## Playwright
**Scenario 1**: For scenario 1, Playwright executes the script successfully, one challenge has been integration of lighthouse for performance. Due to less community support it remain a challenge for easy integration. Performance integration is TBD for this project.

**Scenario 2**: For scenario 2, Playwright executes script successfuly for cases where there can be cross origin link verification.

**Scenarion 3**: For scenario 3, Playwright executes script successfuly for cases where app may open lnks in multiple tabs.

### Running Playwright scripts

#### salesForce.spec.ts: This script handles the scenario 1. For execution of same scripts on different urls, custom commands are added to the **package.json** file as:

```"playwright-stage": "STAGING=\"1\" npx playwright test salesforce.spec"```

```"playwright-dev": "STAGING=\"0\" npx playwright test salesforce.spec"```

**STAGING** parameters specifies environment to be selected. Environment details are added in "playwright.config.ts".

#### For execution run command as 

```npm run playwright-stage```

OR 

```npm playwright-dev ```


#### crossDomain.spec.ts: This script handles the scenario 2.

**For execution run command as**

```npm run playwright crossDomain.spec```
 
#### multitab.spec.ts: This script handles the scenario 3.

**For execution run command as**

```npm run playwright multitab.spec```


## Cypress

**Scenario 1**: For scenario 1, Cypress executes the script successfully. Cypress has a strong community support, which helpd in quick integrations. Cypress had plugin support for lighthouse.

**Scenario 2**: For scenario 2, Cypress script does not support cross origin website verifications.

**Scenarion 3**: For scenario 3, Cypress script does not support verification in case of multi-tabs.

### Running Cypress scripts

#### SaleForce.spec.ts: This script handles scenario 1:

**For execution run command as**

- for running on stage

```npm run cypress-run "cypress/integration/Test_specs/SalesForce.spec.ts --config-file stage-config.json"```

- for running on default system

```npm run cypress-run "cypress/integration/Test_specs/SalesForce.spec.ts"```

> Note: config files can be added for different systems as per the requirement.

#### CrossOrigin.spec.ts: This script handles scenario 2:

**For execution run command as**

```npm run cypress-run "cypress/integration/Test_specs/CrossOrigin.spec.ts"```

#### MultiTabs.spec.ts: This script handles the scenario 3.

**For execution run command as**

```npm run cypress-run "cypress/integration/Test_specs/MultiTabs.spec.ts"```
 


**55 Tech**

**We are relentlessly focusing on digital transformation. Dive deep into the customer cases to know more about the project which we delivered.**
