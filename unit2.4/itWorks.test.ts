import {Builder, Capabilities, By, until} from 'selenium-webdriver'
const chromedriver = require("chromedriver")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test("can it open employee manager", async () => {
    await driver.get("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html")
    await driver.sleep(10000)
    await driver.quit()
})