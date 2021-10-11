const puppeteer = require("puppeteer");

(async () => {
  // browser init
  const browser = await puppeteer.launch({
    headless: false,
  });
  // open new tab
  const page = await browser.newPage();
  // got to url
  await page.goto("https://machadopedro.com/");
  // take screenshot
  await page.screenshot({ path: "myWwbsite.png" });
  // get page data
  const data = await page.evaluate(() => {});

  // close browser
  await browser.close();
})();
