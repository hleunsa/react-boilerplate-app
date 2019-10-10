import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from edit component
    </div>
);

const HelpPage = () => (
    <div>
        This is from Help component
    </div>
);

const NotFoundPage = () => (
    <div>
        404! <Link to="/">Go Home</Link>
    </div>
);

const Headers = () => (
    <header>
        <h1>Expensify</h1>
        <h2><NavLink to="/" activeClassName="is-active" exact={true} >Home</NavLink></h2>
        <h2><NavLink to="/create" activeClassName="is-active">Create</NavLink></h2>
        <h2><NavLink to="/edit" activeClassName="is-active">Edit</NavLink></h2>
        <h2><NavLink to="/help" activeClassName="is-active">Help</NavLink></h2>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Headers/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));