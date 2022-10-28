//FaceBook wiki Page
import { Locator, Page } from "@playwright/test";

export class WikiPage {
  readonly page: Page;
  readonly facebookLink: Locator;
  readonly verifyUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.facebookLink = page.locator(
      'xpath=//*[@id="mw-content-text"]/div[1]/table[1]/tbody/tr[11]/td/span/a'
    );
    this.verifyUrl = "https://www.facebook.com/";
  }
}
