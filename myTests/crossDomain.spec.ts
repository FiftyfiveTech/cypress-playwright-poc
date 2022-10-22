import { test, expect } from "@playwright/test";
import { FiftyFiveTechPage } from "../pages/fiftyfivetech.page";

test.beforeEach(async ({ context, page }) => {
  await page.goto("https://www.fiftyfivetech.io/");
});

test("Cross Domain", async ({ page }) => {
  const FFPage = new FiftyFiveTechPage(page);
  await expect(FFPage.acceptLink).toBeVisible();
  await FFPage.acceptLink.click();

  page.waitForTimeout(5000);
  await FFPage.LinkedinLink.click();
  await expect(page).toHaveURL(FFPage.verifyUrl);
});
