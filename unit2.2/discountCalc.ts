function discountCalc(
    senior: boolean, 
    vetOrRes: boolean, 
    members: boolean): number {
        if (senior && vetOrRes && members) return 0.25;
        if ((senior && members) || (vetOrRes && members)) return 0.15
        if (senior || vetOrRes || members) return 0.10
        return 0
}

console.log("all three discounts works", discountCalc(true, true, true))
console.log("senior and memeber works ", discountCalc(true, false, true))
console.log("VetOrRes works", discountCalc(false, true, true))
console.log("Members work", discountCalc(false, false, true))
console.log("No discount works", discountCalc(false, false, false))

