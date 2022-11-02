let firstList: Array<number> = [12, 15]

let secondList: Array<string> = [
    "Elephant",
    "Lion",
    "Tiger",
    "Polar Bear", 
    "Monkeys"
]

firstList.push(12345)
firstList.push(45657688)
firstList.push(45346756768)

console.log("The first list is:", firstList)
console.log("The second list is", secondList)

console.log("should be 12345", firstList[2]) 
console.log("should be Elephant", secondList[0])