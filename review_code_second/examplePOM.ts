//import what we need from selenium 
import { Builder, By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver"

const chromedriver = require("chromedriver")

export class emManager {
    driver: WebDriver; 
    url: string = 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html'
    header: By = By.css('.titleText')
    addEmployee: By = By.name('addEmployee')
    newEmployee: By = By.xpath('//li[text()= "New Employee"]')
    nameField: By = By.css('[name= "nameEntry"]')
    phoneField: By = By.name('phoneEntry')
    titleField: By = By.name('titleEntry')
    saveBtn: By = By.xpath('//button[@id="saveBtn"]')
    constructor(driver: WebDriver) {
        this.driver = driver
    }
    async navigate() {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.header))
    }
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy))
        return (await this.driver.findElement(elementBy)).click()
    }
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).sendKeys(keys)
    }
    async getElement(elementBy: By): Promise<WebElement>{
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
        return element
    }
    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy)
        await input.clear()
        return input.sendKeys(keys) 
    }
}