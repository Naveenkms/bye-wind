import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Default Page", () => {
  test("should render default page", async ({ page }) => {
    await expect(page).toHaveURL("/");
    await expect(page.getByRole("heading", { name: "eCommerce" })).toBeVisible();
  });
});

test.describe("Order List Page", () => {
  test("should navigate to order-list page", async ({ page }) => {
    await page.goto("/dashboards/e-commerce/order-list");
    await expect(page.getByRole("heading", { name: "Order List" })).toBeVisible();
  });
});
