import React from 'react';

const PortfolioDetailsPage = (props) => (
    <div>
        <h1>A thing I have done!</h1>
        <p>An example of thing I have done is this portfoltio:</p>
        <p>{props.match.params.id}</p>
    </div>
);

export default PortfolioDetailsPage;