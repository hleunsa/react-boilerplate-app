import React from 'react'
import { NavLink } from 'react-router-dom';

const Headers = () => (
    <header>
        <h1>Expensify</h1>
        <h2><NavLink to="/" activeClassName="is-active" exact={true} >Home</NavLink></h2>
        <h2><NavLink to="/create" activeClassName="is-active">Create</NavLink></h2>
        <h2><NavLink to="/edit" activeClassName="is-active">Edit</NavLink></h2>
        <h2><NavLink to="/help" activeClassName="is-active">Help</NavLink></h2>
    </header>
);

export default Headers;