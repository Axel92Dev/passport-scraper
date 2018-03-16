const puppeteer = require('puppeteer');
const credentials = require('./credentials');

const USERNAME_SELECTOR = '#codiceFiscale';
const PASSWORD_SELECTOR = '#password';
const SUBMIT_SELECTOR = '#btnSub';
const SEARCH_PROVINCE_SELECTOR = '#CittadinoForm input';
const TD_AVAILABILITY_SELECTOR = 'tbody tr td[headers="disponibilita"]';

const LOGIN_URL = 'https://www.passaportonline.poliziadistato.it/logInCittadino.do';

async function run() {
    const browser = await puppeteer.launch();

    try {
        const page = await browser.newPage();

        await page.goto(LOGIN_URL);
        // await page.screenshot({
        //     path: 'screenshots/login.png'
        // });

        await page.click(USERNAME_SELECTOR);
        await page.keyboard.type(credentials.username);

        await page.click(PASSWORD_SELECTOR);
        await page.keyboard.type(credentials.password);

        await page.click(SUBMIT_SELECTOR);

        await page.waitForNavigation();

        await page.click(SEARCH_PROVINCE_SELECTOR);
        await page.waitForNavigation();

        const availabilityTds = await page.evaluate((sel) => {
            return Array.from(document.querySelectorAll(sel)).map((td) => td.innerText);
        }, TD_AVAILABILITY_SELECTOR);

        if (availabilityTds.find((yesOrNo) => yesOrNo !== 'No')) {
            console.log('there is availability!');

            await page.screenshot({
                path: 'screenshots/disp.png'
            });
        } else {
            console.log('no availability');
        }
    } catch (err) {
        console.log(err);
    } finally {
        browser.close();
    }
}

setInterval(() => run(), 1000 * 60);