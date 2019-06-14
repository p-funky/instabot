const dotenv = require('dotenv');
const minimist = require('minimist');
const instagrambot = require('./instagram');

const cli_args = minimist(process.argv.slice(2));

const userhandle = cli_args['userHandle'] || 'gbenga_ps';
const MESSAGE = cli_args['msg'] || 'Yinka Alabi sent this test message. Kindly ignore.';

dotenv.config();


(async () => {

  await instagrambot.initialize();

  await instagrambot.login(process.env.INSTA_USERNAME, process.env.INSTA_PASSWORD);

  await instagrambot.navigateToExampleProfile(userhandle);
  await instagrambot.sendSampleMessage(MESSAGE);
  await instagrambot.saveCookies();

  await instagrambot.browser.close();
})();
