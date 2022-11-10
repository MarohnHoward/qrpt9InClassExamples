import { Builder, By, Capabilities, WebDriver } from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

describe("practicing CSS selectors", () => {
  beforeEach(async () => {
    await driver.get("https://www.amazon.com");
  });
  afterAll(async () => {
    await driver.quit();
  });

  const searchBar: By = By.xpath("//input[@id='twotabsearchtextbox']");
  const results: By = By.xpath("//div[contains(@class, 's-main-slot')]");

  test("searching for an item on amazon", async () => {
    await driver.findElement(searchBar).sendKeys("baby yoda\n");
    let resultsText = await driver.findElement(results).getText();
    expect(resultsText).toContain("The Child");
  });
});