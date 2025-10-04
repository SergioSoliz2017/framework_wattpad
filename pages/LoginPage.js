import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.btnLogin = '//*[@id="login-form"]/button';
    this.btnEmail = "button[text=Sign in with email]";
    this.emailInput = 'input[id="login-username"]';
    this.passwordInput = 'input[id="password"]';
  }

  async gotoLogin() {
    await this.page.goto(process.env.BASE_URL);
    //await this.page.pause();
    await this.page.locator("button", { hasText: "Log In" }).first().click();
    await this.page
      .locator("button", { hasText: "Log in with email" })
      .first()
      .click();
  }

  async login(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.btnLogin);
    await expect(this.page).toHaveURL("https://www.wattpad.com/home");
  }
}
