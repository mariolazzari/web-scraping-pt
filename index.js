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
  // get page paragraph
  const getParagraph = await page.evaluate(() => {
    const pgTag = document.querySelector(".col-lg-6.intro-content p");

    //return pgTag.innerHTML;
    return pgTag.innerText;
  });

  console.log(getParagraph);

  // close browser
  await browser.close();
})();
