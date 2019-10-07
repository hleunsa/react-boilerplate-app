'use strict';

console.log('Running the BuildItApp ...');

var appRoot = document.getElementById('app');

var app = {
    visibility: false,
    details: "Here are some details"
};

var toggleVisibility = function toggleVisibility() {
    app.visibility = !app.visibility;
    renderApp();
};

var renderApp = function renderApp() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            app.visibility ? "Hide details" : "Show details"
        ),
        app.visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                app.details
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
