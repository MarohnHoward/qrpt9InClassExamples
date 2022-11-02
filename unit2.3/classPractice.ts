class Employee {
    id: number; 
    name: string;
    phone: any;
    email: string;

    constructor(id: number, name: string, phone: any, email: string) {
        this.id = id; 
        this.name = name;
        this.phone = phone; 
        this.email = email; 
    }

    toString(): string {
        let output = 
        `Employee Record ID ${this.id}\n` +
        `Name: ${this.name}\n` +
        `Contact Information\n` +
        `Phone: ${this.phone}` +
        `\tEmail: ${this.email}`;
        return output
    }
}

let firstEmployee = new Employee(
    1,
    "Sadie Adler",
    8675309,
    "sadie.adler1899@gmail.com"
)

console.log(firstEmployee.toString())

class Birb {
    name: string; 
    canFly: boolean; 
    hasFeathers: boolean = true; 

    constructor(name: string, canFly: boolean) {
        this.name = name; 
        this.canFly = canFly; 
    }
}

let birbs: Array<Birb> = [
    new Birb("Toucan", true), 
    new Birb("Penguin", false),
    new Birb("Pidgeon", true),
    new Birb("Emu", false)
]

birbs.forEach((item: Birb) => {
    console.log(item)
})