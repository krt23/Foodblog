import React from 'react';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Kris" />;

class ComponentsAndProps extends React.Component {
  render() {
    return (
    <div className="App">
      <div>{element}</div>
    </div>
    );
  }
}

export default ComponentsAndProps;


