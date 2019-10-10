import React from 'react';
import { Link } from 'react-router-dom';

export default class PortfolioHomePage extends React.Component {
    state = {
        portfolios: [
            "Item one",
            "Item two"
        ]
    };

    render() {
        return (
            <div>
                <h1>My Work</h1>
                <p>Check out the following things I have done:</p>
                <div className="protfolio__list">
                    {this.state.portfolios.map((portfolio) => (
                        <h4 className="portfolio__list__link"><Link to={`/portfolio/${portfolio}`}>{portfolio}</Link></h4>
                    ))}
                </div>
            </div>
        );
    }
};