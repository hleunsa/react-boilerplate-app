console.log('Running the BuildItApp ...');

const appRoot = document.getElementById('app');

const app = {
    visibility:false,
    details:"Here are some details"
}

const toggleVisibility = ()=>{
    app.visibility = !app.visibility;
    renderApp();
}

const renderApp = () => {

    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{app.visibility ? "Hide details": "Show details"}</button>
            {app.visibility && (<div><p>{app.details}</p></div>)}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();