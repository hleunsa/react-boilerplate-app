import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'testing');

ReactDOM.render(template, document.getElementById('app'));


// import validator from 'validator';

// console.log("test", "is e-mail", validator.isEmail("test"));
// console.log("hlk@activeviam.com", "is e-mail", validator.isEmail("hlk@activeviam.com"));

// import isSenior, {isAdult, canDrink} from './person';

// console.log(20, " is adult:", isAdult(20));
// console.log(18, " is adult:", isAdult(18));
// console.log(17, " is adult:", isAdult(17));
// console.log(18, " can drink", canDrink(18));
// console.log(21, " can drink", canDrink(21));
// console.log(24, " can drink", canDrink(24));
// console.log(24, " is senior", isSenior(24));
// console.log(40, " is senior", isSenior(40));
// console.log(60, " is senior", isSenior(60));