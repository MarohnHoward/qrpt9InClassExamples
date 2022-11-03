export class Animal {
    //this is our boilerplate for our class we have named it animal. 
    name: string;
    type: string;
    preferredFoods: Array<string>;
    // name, type and preferredFoods are what we need in order to use that class
    constructor(name: string, type: string, preferredFoods: Array<string>) {
      this.name = name;
      this.type = type;
      this.preferredFoods = preferredFoods;
      //The constructor is saying that now name is expecting a string as well as type 
      //and that preferredFoods is looking for an array of strings but more on this later dont stress!
    }
    feed(food: string) {
        //this is our method for how we are getting our repsonses for the food we give the animals
        //if we give the animal food that it likes then it will say name of animal the type of animal likes type of food!
      if (this.preferredFoods.includes(food))
        return `${this.name} the ${this.type} likes ${food}!`;
      else return `${this.name} the ${this.type} does not like ${food}!`;
    }
  }