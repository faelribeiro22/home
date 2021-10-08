import React from 'react';

const Teste = ({ submitButton }) => {
  const callFunction = () => submitButton(777);
  return (
    <div>
        <h3>Teste Manooooo</h3>
    </div>
  )
}

export default Teste;