import { test, expect } from "../utils/fixtures.js";
import { LoginPage } from "../pages/LoginPage.js";

test("Lgon webtoons", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLogin();
  await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
});
