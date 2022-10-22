import { test, expect } from "@playwright/test";
import happoPlaywright from "happo-playwright";
import { SalesForceHomePage } from "../pages/login.page";
import config from "../config";

// this script caters both providing env details and login through CLI
// Happo integration to verify visuals view

test.beforeEach(async ({ context, page }) => {
  await happoPlaywright.init(context);
  await page.goto("");
  const forgotLink = page.locator('a:has-text("Forgot Your Password?")');
  await expect(forgotLink).toBeVisible();
});

test.afterEach(async () => {
  await happoPlaywright.finish();
});

test("Salesforce login", async ({ page }) => {
  const USER_NAME = config.development.username;
  const PASS = config.development.pass;
  const loginPage = new SalesForceHomePage(page);
  console.log(process.env);

  await happoPlaywright.screenshot(page, loginPage.mainLogo, {
    component: "Main Logo",
    variant: "default",
  });
  await happoPlaywright.screenshot(page, loginPage.bodyView, {
    component: "Login page view",
    variant: "default",
  });

  await loginPage.login(USER_NAME, PASS);
  page.waitForTimeout(5000);

  const resendLink = page.locator('a:has-text("Resend Code")');
  await expect(resendLink).toBeVisible();
});
