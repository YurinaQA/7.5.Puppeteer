const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement, getText } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

// Given("user is on {string} page", async function (string) {
//   return await this.page.goto(`https://netology.ru${string}`, {
//     setTimeout: 20000,
//   });
// });

// When("user search by {string}", async function (string) {
//   return await putText(this.page, "input", string);
// });

// Then("user sees the course suggested {string}", async function (string) {
//   const actual = await getText(this.page, "a[data-name]");
//   const expected = await string;
//   expect(actual).contains(expected);
// });


Given("user is on {string} page", async function (string) {
  return await this.page.goto(`${string}`, {
    setTimeout: 80000,
  });
});

When('user clik by butten of date 1', async function () {
  return await clickElement(this.page, "[data-time-stamp='1726693200']");
});

 When('user clik by butten of date 2', async function () {
   return await clickElement (this.page, "[data-time-stamp='1726606800']");
});

 When('user clik by butten of date 3', async function () {
   return await clickElement (this.page, ".page-nav__day.page-nav__day_chosen");
});

When('user clik by butten of movie session time 1', async function () {
  return await clickElement (this.page, "body main a.movie-seances__time[href='#'][data-seance-id='190']");
});

When('user clik by butten of movie session time 2', async function () {
  return await clickElement (this.page, "body main a.movie-seances__time[href='#'][data-seance-id='223']");
});

When('user clik by butten of movie session time 3', async function () {
  return await clickElement (this.page, "body main a.movie-seances__time[href='#'][data-seance-id='223']");
});

When('user clik to choose of free seat 1', async function () {
  return await clickElement (this.page, "body main div[class='buying-scheme__wrapper'] div:nth-child(1) span:nth-child(6)"); 
});

When('user clik to choose of free seat 2', async function () {
  return await clickElement (this.page, "body main div[class='buying-scheme__wrapper'] div:nth-child(1) span:nth-child(7)"); 
});

When('user clik to choose occupied seat', async function () {
  return await clickElement (this.page,"body main div:nth-child(3) span:nth-child(4)");;
});

When('user clik by butten to book a ticket', async function () {
  return await clickElement(this.page,"button.acceptin-button");
});

Then('user sees the title {string}', async function (string) {
  await this.page.waitForSelector("body main h2");
  const eexpected = "Вы выбрали билеты:";
  const actual = await getText(this.page, ".ticket__check-title");
  await expect(actual).contain(eexpected);
});

Then('Button for booking has property disabled: {string}', async function (string) {
  await expect (String(await page.$eval("button", (button) => {
    return button.disabled;}))).contain("true");
});