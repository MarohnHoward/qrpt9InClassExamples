console.log("\nAn Array Of Objects\n")

var people = [
    {
        firstName: "Arthur",
        lastName: "Morgan",
        age: 36
    },
    {
        firstName: "John",
        lastName: "Marston",
        age: 26
    }, 
    {
        firstName: "Sadie", 
        lastName: "Adler", 
        age: 25
    }
]

people.forEach((person) => {
  console.log( `Person: \n "${person.firstName} ${person.lastName}" \n Age: ${person.age}`)
})

console.log("\n An object with an Array\n")

var myPersonWithAnArray = {
    firstName: "Mars", 
    lastName: "Howard", 
    age: 172,
    favoriteIceCreams: [
        "Mint Chocolate Chip",
        "Cake Batter",
        "Cookies and Cream", 
        "Chocolate",
        "Salted Caramel Pretzel"
    ]
}

console.log(`\n Name: ${myPersonWithAnArray.firstName} ${myPersonWithAnArray.lastName} \n Age: ${myPersonWithAnArray.age}`)

myPersonWithAnArray.favoriteIceCreams.forEach((flavor) => {
    console.log(`\n${flavor}`)
})