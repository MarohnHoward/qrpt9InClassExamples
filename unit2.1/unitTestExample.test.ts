import { describe, it } from "@jest/globals"
//This line is tellin gour system that we are looking for describe and it from the jest libraries. 
describe("testing math", () => {
    //holds all of our tests for this project or section 
    it("should do some simple math", () => {
        //this is the test itself you can have as many as you want.
        expect(10).toBeGreaterThan(5)
        expect(5).toBeLessThan(10)
        expect(5).toEqual(5)
        expect(5 === 5).toBeTruthy()
    })
})