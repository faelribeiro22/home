import React from 'react';
import { Button } from 'reactstrap';

const Teste = ({ submitButton }) => {
  const callFunction = () => submitButton(777);
  return (
    <div>
        <h3>Teste Manooooo</h3>
    </div>
  )
}

export default Teste;