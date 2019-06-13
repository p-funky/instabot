const dotenv = require('dotenv');
const instagrambot = require('./instagram');

dotenv.config();

(async () => {

  await instagrambot.initialize();

  await instagrambot.login(process.env.USERNAME, process.env.PASSWORD);

  await instagrambot.navigateToExampleProfile();
  await instagrambot.sendSampleMessage();
  await instagrambot.saveCookies();

  await instagrambot.browser.close();
})();
