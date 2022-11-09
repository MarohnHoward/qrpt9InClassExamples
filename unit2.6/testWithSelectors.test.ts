import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
    })

    const hdrInput: By = By.name('hdrInput');
    const mkeInput: By = By.name('mkeInput')
    const oaiInput: By = By.name('oriInput')
    const nameInput: By = By.name('namInput')
    const clrBtn: By = By.id('clearBtn')
    const submitBtn: By = By.id('saveBtn')
    const errorMsg: By = By.id('validHeader')

    test("filling in the blanks for real", async () => {
        await driver.findElement(hdrInput).sendKeys("Change this")
        await driver.findElement(mkeInput).sendKeys("change this")
        await driver.findElement(oaiInput).sendKeys("change this")
        await driver.findElement(nameInput).sendKeys("change this")
        await driver.findElement(submitBtn).click()
        let errorsMsg = await driver.findElement(errorMsg).getText()
        expect(errorsMsg).toContain("Errors Received:")
        await driver.findElement(clrBtn).click()
        
    })
})