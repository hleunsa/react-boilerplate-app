import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import PortfolioHomePage from '../components/PortfolioHomePage';
import PortfolioDetailsPage from '../components/PortfolioDetailsPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import Headers from '../components/Headers';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Headers/>
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/portfolio" component={PortfolioHomePage} exact={true} />
                <Route path="/portfolio/:id" component={PortfolioDetailsPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>

);

export default AppRouter;