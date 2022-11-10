import * as movie from "./googleSomething.json";

import {
    WebDriver, 
    Builder, 
    Capabilities, 
    until, 
    By
} from 'selenium-webdriver'

const chromedriver = require ("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

movie.forEach((movie)=>{
    test(`searching google for ${movie}`, async ()=>{
        await driver.get("https://www.google.com");
        await driver.wait(until.elementLocated(By.name("q")))
        await driver.findElement(By.name('q')).sendKeys(`${movie}\n`);
        await driver.wait(until.elementLocated(By.id('rso')));
        let value = await driver.findElement(By.id('rso')).getText()
        expect(value.toLowerCase()).not.toContain(movie);
    })
})