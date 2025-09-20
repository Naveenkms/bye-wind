// import { test, expect } from "@playwright/test";

// // Sidebar UI and navigation tests

// test.beforeEach(async ({ page }) => {
//   await page.goto("/");
// });

// test.describe("Sidebar", () => {
//   test("should toggle from visible to invisible and vice versa", async ({
//     page,
//   }) => {
//     await page.getByRole("button", { name: /Toggle Sidebar/ }).click();
    
//   });

//   test("Sidebar contains expected links", async ({ page }) => {
//     await test.step("Verify sidebar links", async () => {
//       const dashboardLink = page.getByRole("link", { name: /dashboard/i });
//       const pagesLink = page.getByRole("link", { name: /pages/i });
//       await expect(dashboardLink).toBeVisible();
//       await expect(pagesLink).toBeVisible();
//     });
//   });

//   test("Sidebar navigation works", async ({ page }) => {
//     await test.step("Navigate using sidebar", async () => {
//       const dashboardLink = page.getByRole("link", { name: /dashboard/i });
//       await dashboardLink.click();
//       await expect(page).toHaveURL(/dashboards/);
//     });
//   });
// });
