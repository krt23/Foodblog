import React from 'react';


function tick() {
  return const time = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

setInterval(tick, 1000);

class RenderingElements extends React.Component {
  render() {
    return (
    <div className="App">
      <div>{time}</div>
    </div>
    );
  }
}

export default RenderingElements;
