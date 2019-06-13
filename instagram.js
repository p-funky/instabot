const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const _data = require('./lib');

const BASE_URL = 'https://instagram.com';

const MESSAGE = 'Yinka Alabi sent this test message. Kindly ignore.';

const elements = {
  loginButton1: '//a[contains(text(), "Log in")]',
  username: 'input[name="username"]',
  password: 'input[name="password"]',
  loginButton2: '//button/div[contains(text(), "Log In")]',
  profile: 'a > span[aria-label="Profile"]',
  followers: 'li > a[href*="/followers"]',
  following: '//div/button[contains(text(), "Following")]',
  messageButton: '//div/button[contains(text(), "Message")]',
  textArea: 'textArea',
  sendMessage: '//div/button[contains(text(), "Send")]'
};

const instagram = {
  browser: null,
  page: null,

  initialize: async () => {
    instagram.browser = await puppeteer.launch({
      headless: false,
      args: ['--start-fullscreen', '--window-size=2560,1800']
    });

    instagram.page = await instagram.browser.newPage();
    await instagram.page.emulate(devices['iPhone 6']);
  },

  login: async (username, password) => {
    await instagram.page.goto(BASE_URL, { waitUntil: 'networkidle0' });

    const loginButton1 = await instagram.page.$x(elements.loginButton1);
    await loginButton1[0].click();

    await instagram.page.waitFor(2000);

    await instagram.page.type(elements.username, username, { delay: 50 });
    await instagram.page.type(elements.password, password, { delay: 50 });

    const loginButton2 = await instagram.page.$x(elements.loginButton2);
    await loginButton2[0].click();
  },

  navigateToExampleProfile: async () => {
    const profilePage = await instagram.page.waitFor(elements.profile);

    await instagram.page.waitFor(3000);

    await instagram.page.evaluate(() => {
      const cancelHomeScreenDialog = document.evaluate('//div/button[contains(text(), "Cancel")]', document, null, XPathResult.ANY_TYPE, null);
      const cancelButton = cancelHomeScreenDialog.iterateNext();
      cancelButton && cancelButton.click();
    });

    await profilePage.click();
    await instagram.page.waitFor(2500);

    const followers = await instagram.page.$(elements.followers);
    await followers.click();
    await instagram.page.waitFor(3000);

    await instagram.page.evaluate(() => {
      const following = document.evaluate('//div/button[contains(text(), "Following")]', document, null, XPathResult.ANY_TYPE, null);
      const firstFollowing = following.iterateNext();
      firstFollowing && firstFollowing.parentNode.parentNode.firstChild.firstChild.lastChild.click();
    });
  },

  sendSampleMessage: async () => {
    await instagram.page.waitFor(1000);
    const messageButton = await instagram.page.waitFor(elements.messageButton);
    await messageButton.click();

    await instagram.page.waitFor(3000);
    await instagram.page.type(elements.textArea, MESSAGE, { delay: 50 });
    const sendButton = await instagram.page.$x(elements.sendMessage);
    await sendButton[0].click();
    await instagram.page.waitFor(1000);
  },

  saveCookies: async () => {
    const cookies = await instagram.page.cookies();

    // check the cookies.json file for the session cookies
    _data.create(__dirname, 'cookies', cookies, function(err) {
      console.log(err);
    });
    await instagram.page.waitFor(1000);
    debugger;
  }
};

module.exports = instagram;
