import React, { Component } from 'react';

class ClassComponentLifecycle extends Component {
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
                {/* Your component JSX */}
            </div>
        );
    }
}

export default ClassComponentLifecycle;