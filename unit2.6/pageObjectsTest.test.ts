import {googlePage} from './pageObjectPractice'

import {
    Builder, 
    By,
    Capabilities, 
    until,
    WebDriver,
    WebElement
} from "selenium-webdriver";

const chromedriver = require('chromedriver'); 
const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build()

const google = new googlePage(driver, "https://www.google.com")

test("do a search", async () => {
    await google.navigate()
    await google.search('star wars legos')
    await google.getResults()
    await driver.quit()
})