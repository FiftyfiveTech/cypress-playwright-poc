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

- [React](https://reactjs.org/) - HTML enhanced for web apps!
- [StoryBook](https://storybook.js.org/) - UI component explorer for frontend developers.
- [Material UI](https://mui.com/) - The React component library you always wanted.
- [Web pack](https://webpack.js.org/) - Bundle your JavaScript applications.
- [Notistack](https://notistack.com/) -  Super easy to display notifications on your web apps.

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
│   ├───fiftyfivetech.page.ts
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

**.happo.ts** - This file is used for managing happo plugins configuration (key, secret and screenshot config etc).

**global-setup.ts** - This file is used by playwright for environment specific variables.

**playwright.config.ts** - This is a configuration file for managing playwright configurations.

**stage-config.json** - This is a configuration file for passing environment details during command execution.

**tsconfig.json** - This is used to configure typescript compiler options and also to specify the root files for the project.

### Scenarios
For purpose of evalauation of tool capabilities and integration with third party plugins, following scenarions are automated:

**Scenario 1:** User login to salesforce website. User should be able to login to salesforce website using different URLs and different user credentials. While execution of script environment details can be passed from CLI. Also demos integration of Happo.io for visual verification and integration of lighthouse for performance testing of page.

**Scenario 2:** Cross origin verification, user opens a website(https://www.fiftyfivetech.io/ in our case). Click on linkedin link and verify that usr is directed to companies linkedin profile page.

**Scenario 3:** Multitab testing, user opens a website(https://www.toolsqa.com/, in our case). Click on "Demo site" link which opens a new website in new tab.

### Playwright
**Scenario 1**: For scenario 1, Playwright executes the script successfully, one challenge has been integration of lighthouse for performance. Due to less community support it remain a challenge for easy integration. Performance integration is TBD for this project.

**Scenario 2**: For scenario 2, Playwright executes script successfuly for cases where there can be cross origin link verification.

**Scenarion 3**: For scenario 3, Playwright executes script successfuly for cases where app may open lnks in multiple tabs.

### Cypress

**Scenario 1**: For scenario 1, Cypress executes the script successfully. Cypress has a strong community support, which helpd in quick integrations. Cypress had plugin support for lighthouse.

**Scenario 2**: For scenario 2, Cypress script does not support cross origin website verifications.

**Scenarion 3**: For scenario 3, Cypress script does not support verification in case of multi-tabs.

### Running Playwright scripts



### Running Cypress scripts

## License

**55 Tech**

**We are relentlessly focusing on digital transformation. Dive deep into the customer cases to know more about the project which we delivered.**
