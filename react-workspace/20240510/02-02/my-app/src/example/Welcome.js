import React from 'react';

class Welcome extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <h1>안녕, {this.props.name}</h1>;
    }
}

export default Welcome;