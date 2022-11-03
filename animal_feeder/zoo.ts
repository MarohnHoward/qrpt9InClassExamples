import { Animal } from "./animal";
//This is where we take the class we created in animal and add our array of animals and their food. 
//Using the same structure that we set in animal we have name as a string type as a string and the preferedFoods which is a string array. 
let animals: Array<Animal> = [
  new Animal("Alex", "Lion", ["meat"]),
  new Animal("Marty", "Zebra", ["grass", "leaves", "shrubs", "bark"]),
  new Animal("Melman", "Giraffe", ["leaves", "hay", "carrots"]),
  new Animal("Gloria", "Hippo", ["grass", "reeds", "shoots"]),
];
//the getAnimal fuctions purpose is so we dont have to search for the animals using the array placement.
export function getAnimal(name: string): Animal {
  return animals.find((animal) => animal.name == name);
}