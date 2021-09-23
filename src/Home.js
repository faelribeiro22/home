import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Home = () => {
  const callFunction = () => console.log('Hello World');
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Olá Module Federation</h1>
        <hr className="my-2" />
        <p>Este componente é de outro app</p>
        <p className="lead">
          <Button color="primary" onClick={callFunction}>Botão</Button>
        </p>
      </Jumbotron>
    </div>
  )
}

export default Home;