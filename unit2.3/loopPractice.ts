var todos: Array<string> = [
    "Wash the Car",
    "Get groceries",
    "Go to the Gym",
    "Eat dinner"
]

// For loops have first a declaring variable then a statement to check then an increment or decrement to the variable.
// in this loop we start at 0 with i stands for index this will loop as long as there are items in the array index
for(let i = 0; i < todos.length; i++) {
    console.log(`Todo #${i + 1}: ${todos[i]}!`)
}

todos.forEach((todo) => {
    console.log(`You still need to ${todo}!`)
})