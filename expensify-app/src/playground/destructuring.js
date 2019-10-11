// console.log('destructuring');

// const person = {
//     age: 26,
//     location: {
//         city: 'Banka',
//         temp: 92
//     }
// };

// // const name = person.name;
// // const age = person.age;
// const {name : firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
    }
};

const {publisher : { name: publisherName = 'Self-publish'} } = book;
console.log(publisherName);