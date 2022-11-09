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

import {googlePage} from './pageObjectPractice'

const google = new googlePage(driver, 'https://www.google.com/')

test('do a search', async () => {
    await google.navigate()
    await google.search('that was easy button')
    await google.getResults()
    await driver.quit()
})