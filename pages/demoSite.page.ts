//home.page.ts
import { expect, Locator, Page } from "@playwright/test";

export class DemoSitePage {
  readonly page: Page;
  readonly acceptLink: Locator;
  readonly demoSiteLink: Locator;
  readonly secondTabUrl: string;
  readonly newTabHeader: string;

  constructor(page: Page) {
    this.page = page;
    this.acceptLink = page.locator("#accept-cookie-policy");
    this.demoSiteLink = page.locator(
      "xpath=/html/body/header/nav/div/div/div[3]/div/div[1]/ul/li[3]/a"
    );
    this.secondTabUrl = "https://demoqa.com/";
    this.newTabHeader = 'xpath=//*[@id="app"]/header/a';
  }
}
