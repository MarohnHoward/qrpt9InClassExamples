import {
    Builder, 
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement
} from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

export class googlePage {
    driver: WebDriver; 
    url: string = 'https://www.google.com/'
    searchBar: By = By.name('q')
    results: By = By.id('rso')
    constructor(driver: WebDriver, url: string) {
        this.driver = driver
        this.url = url 
    }
    async navigate() {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.searchBar))
    }
    async getElement(elementBy: By): Promise<WebElement> {
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
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy))
        return driver.findElement(elementBy).sendKeys(keys)
    }
    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
    }
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).getText()
    }
    async getResults() {
        return this.getText(this.results)
    }
}