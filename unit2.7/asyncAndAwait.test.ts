import {Builder, By, Capabilities, WebDriver, until} from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver= new Builder().withCapabilities(Capabilities.chrome()).build();

test('for async functionality', async ()=>{
    await driver.get('https://www.google.com');
    await driver.wait(until.elementLocated(By.name('q')));
    await driver.findElement(By.name('q')).sendKeys("Penguins\n");
    await driver.wait(until.elementLocated(By.id('rso')));
    let value = await driver.findElement(By.id('rso')).getText()
    expect(value.toLowerCase()).toContain("penguins")
})
test("for async functionality corrrectly", async ()=>{
    await driver.get("https://www.google.com");
    await driver.wait(until.elementLocated(By.id('q')));
    await driver.findElement(By.name('q')).sendKeys("Puppies\n");
    await driver.wait(until.elementLocated(By.id("rso")))
    let value = await driver.findElement(By.id("rso")).getText()
    expect(value.toLowerCase()).toContain("puppies")
})
afterAll(async ()=>{
    await driver.quit()
})