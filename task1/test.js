require('chromedriver');
const {Builder,By,Key,util,webdriver} = require("selenium-webdriver");


async function test(){
    const driver = new Builder().forBrowser('chrome').build();
    await driver.get("https://eli.am/");
    const filterIcon = await driver.findElement(By.id("filter_icon"));
    await filterIcon.isDisplayed();
    await filterIcon.click();
    const filterContainer = await driver.findElement(By.id("filter-field-container"));
    await filterContainer.isDisplayed();
    const search = await driver.findElement(By.id("eli-nav-search"));
    await search.click();
    const searchInput = await driver.findElement(By.id("s"));
    await searchInput.sendKeys("լամպ\n");
    const itemLink = await driver.findElement(By.xpath("(//li[@class='product_cat'])[1]"));
    await itemLink.click();
    const itemName = await driver.findElement(By.className("product_title entry-title"));
    await itemName.isDisplayed();
    await driver.quit();
}
test()