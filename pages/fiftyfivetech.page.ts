import { Locator, Page } from "@playwright/test";

export class FiftyFiveTechPage {
  readonly page: Page;
  readonly acceptLink: Locator;
  readonly LinkedinLink: Locator;
  readonly verifyUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.acceptLink = page.locator('a:has-text("Accept All")');
    this.LinkedinLink = page.locator(
      'xpath=//*[@id="custom_html-4"]/div/div/div[2]/ul/li[3]/a'
    );
    this.verifyUrl = "https://in.linkedin.com/company/fiftyfivetechnologies";
  }
}
