import { test, expect } from "@playwright/test";
import { WikiPage } from "../pages/wiki.page";

test.beforeEach(async ({ context, page }) => {
  await page.goto("https://en.wikipedia.org/wiki/Facebook");
});

test("Cross Domain", async ({ page }) => {
  const WKPage = new WikiPage(page);
  await WKPage.facebookLink.click();
  /// Waiting time to see `facebook.com` home.
  await page.waitForTimeout(2000);
  await expect(page).toHaveURL(WKPage.verifyUrl);
});
