import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <div className="header">
            <h3 className="header__link"><NavLink to="/" activeClassName="is-active" exact={true} >Home</NavLink></h3>
            <h3 className="header__link"><NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink></h3>
            <h3 className="header__link"><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></h3>
        </div>
    </header>
);

export default Header;