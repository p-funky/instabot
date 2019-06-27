#### WHAT IS THIS ALL ABOUT?
This is a simple instagram bot that logs in to instagram and sends a message (if possible considering you cannot send a message to a user you are not following) to a user you search for.

#### PREREQUISITES
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

Step 3 -> Create a `.env` file in the root and put in username & password just as in example file `.env.sample`

Step 4 -> Go to the `index.js` file and type in the handle of the user you want to send a message on line 4

Step 5 -> Still in the `index.js` file, type in the message you want to send on line 5

Step 6 -> In your terminal, run:
```bash
node index.js
