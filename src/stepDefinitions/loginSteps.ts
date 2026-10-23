import {Given, When, Then } from '@cucumber/cucumber';
import {expect} from '@playwright/test';
import {LoginPage} from '../page/loginPage';
import {page} from '../hooks';

let loginPage:LoginPage;
Given('I navigate to the Login Page', async function () {
  loginPage=new LoginPage(page);
  await loginPage.navigate();
});

When('I enter the user details', async function () {
  
  await loginPage.enterUsername();
  await loginPage.enterPassword();
});

Then('I click the Login Button', async function () {
    await loginPage.clickLogin();
});

Then('I should see the inventory list',async function () {
 await loginPage.isInventoryListVisible();
});