const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://www.passaportonline.poliziadistato.it/logInCittadino.do');
  await page.screenshot({ path: 'screenshots/login.png' });
  
  browser.close();
}

run();