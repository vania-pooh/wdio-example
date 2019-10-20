const { expect } = require('chai');
const puppeteer = require('puppeteer-core');

describe('Devtools test', function () {
    it('should have the right title', async function () {
        const hostname = browser.config.hostname;
        const sessionId = browser.sessionId;
        const devtools = await puppeteer.connect(
            { browserWSEndpoint: `ws://${hostname}:4444/devtools/${sessionId}` }
        );
        const page = await devtools.newPage();
        await page.goto('http://duckduckgo.com');
        await page.screenshot({path: 'screenshot.png'});
        const title = await page.title();
        expect(title).equal('DuckDuckGo — Privacy, simplified.');
        await devtools.close();
    });
});
