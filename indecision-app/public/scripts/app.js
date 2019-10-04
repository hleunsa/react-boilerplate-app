'use strict';

console.log('App.js is running! Rolling ... Rolling ...');

var appRoot = document.getElementById('app');

// JSX - JavaScript XML
var app = {
    title: "Holidays",
    subTitle: "Holidays Plans",
    options: []
};

var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();

    var option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = "";
        renderApp();
    }
    console.log("Form submitted");
};

var removeAll = function removeAll() {
    app.options = [];
    renderApp();
};
var renderApp = function renderApp() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.title && React.createElement(
            'p',
            null,
            app.subTitle
        ),
        app.options.length > 0 ? "Here are the possible destination" : "No destinations",
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove all'
        ),
        app.options.length > 0 && React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    null,
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add destination'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();

/* // 1st Assignement : Create a new JSX template and render in the place of the first one
const user = {
    name: "HuLK",
    age: 105,
    location: "Banka"
};
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } else {
        return undefined;
    }
}

const userName = "HuLK";
const userAge = 104;
const userLocation = "Bagondack";
const templateTow = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 50) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);



const appRoot = document.getElementById('app');

ReactDOM.render(templateTow, appRoot); */

/* let count = 0;
const addOne = () => {
    count++;
    console.log('addOne');
    renderCounterApp();
};
const minusOne = () => {
    count--
    console.log('minusOne');
    renderCounterApp();
}
const reset = () => {
    count = 0;
    console.log('reset');
    renderCounterApp();
}

const renderCounterApp = () => {

    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    // console.log(templateThree);

    const appRoot = document.getElementById('app');

    ReactDOM.render(templateThree, appRoot);

}

renderCounterApp(); */
