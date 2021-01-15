"use strict";

const chromium = require("chrome-aws-lambda");

module.exports.hello = async (event) => {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
  });

  const page = await browser.newPage();
  await page.goto("https://ramdajs.com");
  const content = await page.evaluate(() => document.body.innerHTML);

  return { statusCode: 200, body: JSON.stringify(content) };
};
