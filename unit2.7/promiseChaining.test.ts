import { Builder, By, Capabilities, WebDriver, until } from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

test('promise chaining', ()=>{
    return driver.get("https://www.google.com")
    .then(()=>{
        return driver.wait(until.elementLocated(By.name('q')))
    })
    .then(()=>{
        return driver.findElement(By.name('q')).sendKeys("Puppies\n")
    })
    .then(()=> {
        return driver.findElement(By.id('rso')).getText()
    })
    .then((value)=>{
        expect(value.toLowerCase()).toContain("Puppies")
    })
    .catch((e) =>{
        console.log(e)
        expect(false).toBeTruthy()
        return driver.quit()
    })
})
