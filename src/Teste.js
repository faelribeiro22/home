import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Teste = ({ submitButton }) => {
  const callFunction = () => submitButton(777);
  return (
    <div>
      <Jumbotron>
        <h3>Teste Manooooo</h3>
    </div>
  )
}

export default Teste;