import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class Google extends BasePage {
    searchBar: By = By.name('q')
    results: By = By.id('rso')
    constructor() {
        super({url: "https://www.google.com"})
    }
    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
    }
    async getResults() {
        return this.getText(this.results)
    }
}