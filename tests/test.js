const assert = require('assert');

describe('Beaches page', function () {
    it('should have the right title', async function () {
        await browser.url('https://www.beaches.com/');
         const title = await browser.getTitle();
        //browser.pause(500000);
        assert.equal(title, 'Beaches Resorts - Family Friendly Caribbean All-Inclusives & Vacations');
        console.log('This is a test ' + title);
    });
});
