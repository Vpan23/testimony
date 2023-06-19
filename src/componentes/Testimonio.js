import React from 'react';
import '../styles-sheets/Testimonio.css';

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={require('../imagenes/testimonio1.jpeg')} alt='Foto de sana'width={"200px"}/>
      <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'>Sana</p>
      <p className='cargo-testimonio'>Kpop Idol : Twice</p>
      <p className='texto-testimonio'>    Lorem ipsum dolor sit amet consectetur adipisicing elit. A nihil quod repudiandae nobis doloremque corporis voluptate facilis molestias! Quo, aspernatur illo. Dolorem sint velit deleniti fugiat natus debitis, laborum nisi! Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. A nihil quod repudiandae nobis doloremque corporis voluptate facilis molestias!</p>
      </div>
    </div>
  );  
}

export default Testimonio; 