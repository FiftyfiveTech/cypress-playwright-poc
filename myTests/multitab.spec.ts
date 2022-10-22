import { test, expect } from "@playwright/test";
import { DemoSitePage } from "../pages/demoSite.page";

test.beforeEach(async ({ context, page }) => {
  await page.goto("https://www.toolsqa.com/");
});

test("multitab test", async ({ page, context }) => {
  // In this case script verifies the page on multi tab
  const demoPage = new DemoSitePage(page);
  //verify page loaded and accept cookies
  await expect(demoPage.acceptLink).toBeVisible();
  await demoPage.acceptLink.click();

  const pagePromise = page
    .context()
    .waitForEvent("page", (p) => p.url() == demoPage.secondTabUrl);
  // click on link that opens in new tab
  await demoPage.demoSiteLink.click();

  //Verify visibility of header link on new tab
  const newPage = await pagePromise;
  await newPage.bringToFront();
  const check = newPage.locator(demoPage.newTabHeader);
  await expect(check).toBeVisible();
});
