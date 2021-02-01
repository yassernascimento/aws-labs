import { Injectable } from '@nestjs/common';
import chromium = require('chrome-aws-lambda');

@Injectable()
export class AppService {
  async getRamdaHtml(): Promise<string> {
    const browser = await chromium.puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath,
    });

    const page = await browser.newPage();
    await page.goto('https://ramdajs.com');
    const content = await page.evaluate(() => document.body.innerHTML);

    return content;
  }
}
