import React from 'react';

class HelloWorld extends React.Component {
  render() {
    // Destructure the props to access the render function
    const { render } = this.props;

    // Render the content using the render prop function
    return render("Hello, World!");
  }
}

const HelloWorldComponent = () => {
  return (
    <HelloWorld
      render={(content) => <h1>{content}</h1>}
    />
  );
};

export default HelloWorldComponent;