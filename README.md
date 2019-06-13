#### WHAT IS THIS ALL ABOUT?
This is a simple instagram bot that logs in to instagram and sends a sample message to the first connect that follows you and that you are also following.

#### PREQUISITES
Must have Nodejs and npm installed. If note, visit https://nodejs.org/en/download/ to install. It comes with node and npm.

#### HOW TO RUN THIS PROJECT
Step 1 -> Go to your terminal and navigate to this project directory. e.g. cd documents/instabot

Step 2 -> Run: 
```bash
npm install
```

If you see a message during installation like "\*\*INFO** Skipping Chromium download. "PUPPETEER_SKIP_CHROMIUM_DOWNLOAD" was set in npm config." then run

```bash
npm config set puppeteer_skip_chromium_download false
```
before running "`npm install`" again.

You can then run "`npm config set puppeteer_skip_chromium_download true`" after successful download of Chrome into your project directory.

Step 3 -> Open the `.env` file and put in username & password just as in example file `.env.sample`

Step 4 -> In your terminal, run:
```bash
node index.js
```
