import * as serverless from "serverless-http";
import * as express from "express";

import chromium = require("chrome-aws-lambda");

const app = express();
app.get("/test/a", (req, res) => res.send({ message: "Test A" }));
app.get("/test/b", (req, res) => res.send({ message: "Test B" }));
app.get("/puppeteer", async (req, res) => {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
  });

  const page = await browser.newPage();
  await page.goto("https://ramdajs.com");
  const content = await page.evaluate(() => document.body.innerHTML);

  res.send({ message: content });
});

exports.app = serverless(app);
