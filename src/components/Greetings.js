import React from 'react';

function Greetings(props) {
  let greeting = '';

  switch (props.lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'Hello';
      break;
  }
  return (
    <div className='Greetings box'>
      <p>{greeting} {props.children}</p>
    </div>
  );
}

export default Greetings;