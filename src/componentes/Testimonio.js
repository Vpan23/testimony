import React from 'react';

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={require('../imagenes/testimonio1.jpg')} alt='Foto de Rubius'/>
      <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'>Emma Bostian en Suecias</p>
      <p className='cargo-testimonio'>Ingenieria de Software</p>
      <p className='texto-testimonio'>Siempre he sido buena en mate</p>
      </div>
    </div>
  );  
}