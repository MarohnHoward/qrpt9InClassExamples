class Bird {
    name: string; 
    canFly: boolean; 
    hasFeathers: boolean = true; 

    constructor(name:string, canFly: boolean) {
        this.name = name; 
        this.canFly = canFly; 
    }

    flapWings() {
        if(this.canFly)
        console.log(`${this.name} flaps its wings and takes off into the horizon`)
        else
        console.log(`${this.name} can't fly and is generally pretty bummed about it`)
    }
}

let birds: Array<Bird> = [
    new Bird("Toucan", true), 
    new Bird("Penguin", false),
    new Bird("Pidgeon", true),
    new Bird ("Emu", false)
]

birds.forEach((item: Bird) => {
    item.flapWings()
})