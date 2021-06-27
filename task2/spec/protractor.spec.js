const { element, browser } = require("protractor");
const chai = require('chai');
const expect = chai.expect;

describe('testing eli.am', () => {

    beforeEach(async function () {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://eli.am/');
        await browser.driver.manage().window().maximize();
        await browser.sleep(700);
    });

    it('should check 9 items in eli.am', async () => {
        const filterIcon = element(by.id("filter_icon"));
        await browser.sleep(700);
        await filterIcon.click();
        const filterContainer = element(by.id("filter-field-container"));
        await filterContainer.isDisplayed();
        const search = element(by.id("eli-nav-search"));
        await search.click();
        const searchInput = element(by.id("s"));
        await searchInput.sendKeys("լամպ\n");
        const itemLink = element(by.xpath("(//li[@class='product_cat'])[1]"));
        await itemLink.click();
        const itemName = await element(by.className("product_title entry-title")).getText();
        console.log(itemName)
        expect(itemName).equal('Սիլիկոնե լամպ – Նապաստակ');
    });
});