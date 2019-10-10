import React from 'react'
import { NavLink } from 'react-router-dom';

const Headers = () => (
    <header>
        <h1>Portfolio</h1>
        <div className="headers">
            <h3 className="headers__link"><NavLink to="/" activeClassName="is-active" exact={true} >Home</NavLink></h3>
            <h3 className="headers__link"><NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink></h3>
            <h3 className="headers__link"><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></h3>
        </div>
    </header>
);

export default Headers;