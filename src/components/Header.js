import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../firebase/firebase';

export const Header = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        <h2><NavLink to="/" activeClassName="is-active" exact={true} >Home</NavLink></h2>
        <h2><NavLink to="/create" activeClassName="is-active">Create</NavLink></h2>
        <h2><NavLink to="/help" activeClassName="is-active">Help</NavLink></h2>
        <button onClick={startLogout}>logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);