// arguments object - no longer bound with arrow functions
function add(a, b) {
    console.log(arguments)
    return a + b;
}
console.log(add(2, 3));

const addArrow = (a, b) => {
    // console.log(arguments)
    return a + b;
}
console.log(addArrow(4, 3));

//  this keyword - no longer bound

const user = {
    name: 'HulK',
    cities: ['Yaoundé', 'New York', 'Bafang'],
    printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);

        return this.cities.map((city) => this.name + ' has live in ' + city);
    }
};
console.log(user.printPlacesLived());

// Challenge area
const multiplier = {
    numbers: [1, 2, 4, 5,],
    multiplyBy: 10,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply());
