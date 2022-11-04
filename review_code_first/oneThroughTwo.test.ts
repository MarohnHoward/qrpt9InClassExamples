//SETTING VARIABLES REVIEW
var numberOne: number = 10 
var numberTwo: number = 15 
var wordOne: string = "word"
var wordTwo: string = "two"
var booleanOne: boolean = true
var booleanTwo: boolean = false

describe("Should add variables ", () => {
    it("should add the numbers", () => {
        expect(numberOne + numberTwo).toEqual(25)
        expect(numberTwo - numberOne).toEqual(5)
    })
    it("Should not pass with capitals", () => {
        expect(wordOne).not.toEqual("WOrd")
        expect(wordTwo).toEqual("two")
    })
    it("should compare the booleans", () => {
        expect(booleanOne).not.toEqual(booleanTwo)
    })
    
})

//FUNCTIONS REVIEW IF ELSE

function wordPass(word:string): string {
    if (word === "first") {
        return "this is the first option"
    } else if (word === "second") {
        return "this is the second option"
    } else {
        return "you only have two options!"
    }
}

describe("it should use the function correctly", () => {
    it("should pass this is the first option", () => {
        expect(wordPass("first")).toBe("this is the first option")
       
    })
  
    it("should pass second option", () => {
        expect(wordPass("second")).toBe("this is the second option")
        
        })
    it("should yell at us", () => {
        expect(wordPass("anything")).toBe("you only have two options!")
       
    })
    
})