//home.page.ts
import { Locator, Page } from "@playwright/test";
export class SalesForceHomePage {
  readonly page: Page;
  readonly mainLogo: Locator;
  readonly bodyView: Locator;
  readonly forgotLink: Locator;

  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainLogo = page.locator(".standard_logo");
    this.bodyView = page.locator("body");
    this.forgotLink = page.locator('a:has-text("Forgot Your Password?")');
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.loginButton = page.locator("#Login");
  }

  async login(username: any, pass: any) {
    await this.username.fill(username);
    await this.password.fill(pass);
    await this.loginButton.click();
  }
}
