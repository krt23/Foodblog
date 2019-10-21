import React from 'react';

const name = 'Kris';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Kris',
  lastName: 'Tkachyk'
};


class IntrodJSX extends React.Component {
  render() {
    return (
    <div className="App">
      <div>Hello, {name}</div>
      <h1>Hello, {formatName(user)}!</h1>
    </div>
    );
  }
}

export default IntrodJSX;


