import React from 'react';

const Teste = ({ submitButton, nameButton }) => {
  const callFunction = () => submitButton(777);
  return (
    <div>
        <h3>{nameButton}</h3>
    </div>
  )
}

export default Teste;