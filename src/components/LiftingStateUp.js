import React from 'react';

const name = 'Kris';


class MyComponent extends React.Component {
  render() {
    return (
    <div className="App">
      <div>Hello, word</div>
      <div>Hello, {name}</div>
    </div>
    );
  }
}

export default MyComponent;


