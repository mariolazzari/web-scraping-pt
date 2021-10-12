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

  // get technologies
  const getTechnologies = await page.evaluate(() => {
    let techs = [];

    const tags = document.querySelectorAll(".row.back-end ul li");
    tags.forEach(tag => techs.push(tag.innerText));

    return techs;
  });
  console.log(getTechnologies);

  // quotes
  const quotesPage = await browser.newPage();
  await quotesPage.goto("https://quotes.toscrape.com/");

  const getQuotes = await quotesPage.evaluate(() => {
    const quotes = document.querySelectorAll(".quote");
    let quotesArray = [];

    quotes.forEach(quoteTag => {
      const quoteInfo = quoteTag.querySelectorAll("span");
      const quote = quoteInfo[0].innerText;
      const author = quoteInfo[1].querySelector("small").innerText;

      quotesArray.push({ quote, author });
    });

    return quotesArray;
  });
  console.log(getQuotes);

  // click on login
  await quotesPage.click('a[href="/login"]');

  // close browser
  // await browser.close();
})();
