//Create an application for any kind of variable using react that explores the react component lifecycle by logging lifecycle methods at different stages.

import React, { Component } from 'react';

class QuestionSeven extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor called');
    }

    componentDidMount() {
        console.log('Component did mount');
    }

    componentDidUpdate() {
        console.log('Component did update');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    render() {
        console.log('Render called');
        return (
            <div>
                {/* Your component content here */}
            </div>
        );
    }
}

export default QuestionSeven;