import React from 'react';
import './App.css';
import Btn from './UI/Btn';
import Options from './UI/Options';
import Slogan from './Layout/Slogan';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Btn>
        </Btn>
      </header>
      <nav className='nav'>
        <Options name="Computadores de mesa"></Options>
        <Options name="Computadores portátiles"></Options>
        <Options name="Accesorios de computador"></Options>
      </nav>
      <div className='slogan-container'>
        <Slogan greetings="¡Bienvenido!"
              slogan="La mejor alternativa para tu set up"
              description="Te ofrecemos la mejor calidad en dispositivos periféricos de alta calidad, con la mejor variedad directamente de las tiendas oficiales. Anímate a comprar con nosotros y a disfrutar de nuestros descuentos exclusivos para clientes. Te esperamos">

      </Slogan>
      </div>
   
    </div>
  );
}

export default App;
