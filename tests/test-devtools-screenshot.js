const assert = require('assert');
const puppeteer = require('puppeteer');

describe('Devtools test', function () {
    it('should have the right title', async function () {
        const devtools = await puppeteer.connect(
            { browserWSEndpoint: `ws://localhost:4444/devtools/${browser.sessionId}` }
        );
        const page = await devtools.newPage();
        await page.goto('http://duckduckgo.com');
        await page.screenshot({path: 'screenshot.png'});
        const title = await page.title();
        assert.equal(title, 'DuckDuckGo — Privacy, simplified.');
        await devtools.close();
    });
});
