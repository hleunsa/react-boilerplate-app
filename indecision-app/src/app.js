import {isAdult, canDrink} from './person'

console.log(20, " is adult:", isAdult(20));
console.log(18, " is adult:", isAdult(18));
console.log(17, " is adult:", isAdult(17));
console.log(18, " can drink", canDrink(18));
console.log(21, " can drink", canDrink(21));
console.log(24, " can drink", canDrink(24));