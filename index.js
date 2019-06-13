const dotenv = require('dotenv');
const instagrambot = require('./instagram');

const userhandle = 'gbenga_ps'
const MESSAGE = 'Yinka Alabi sent this test message. Kindly ignore.';

dotenv.config();


(async () => {

  await instagrambot.initialize();

  await instagrambot.login(process.env.INSTA_USERNAME, process.env.INSTA_PASSWORD);

  await instagrambot.navigateToExampleProfile(userhandle);
  await instagrambot.sendSampleMessage(MESSAGE);
  await instagrambot.saveCookies();

  await instagrambot.browser.close();
})();
