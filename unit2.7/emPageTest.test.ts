import {Builder,
By, 
Capabilities,
until,
WebDriver} from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

import { employeeManPO } from "./employeeManagerPage";

const employP = new employeeManPO(driver);

describe(" practicing abstraction", ()=>{
    beforeEach(async ()=> {
        await employP.navigate()
    })
    afterAll(async ()=>{
        await employP.driver.quit()
    });

    test("adding an employees name",async() => {
        await employP.click(employP.addEmployee);
        await employP.click(employP.newEmployee);
        await employP.setInput(employP.nameField, "Joe Shmo");
        await employP.click(employP.saveBtn);
        
        
    })
})