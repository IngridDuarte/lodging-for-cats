import React from 'react';
import './style.css'
import Logo from '../images/logo.png'
// import ReactDOM from 'react-dom';

function Header (){
  return (
    <header>
      <div>
        <img src={Logo} alt="logo ilustração gato dormindo"></img>
      </div>
      <nav>
       <a href="">Sobre nós</a>
       <a href="">Agendamento</a>
       <a href="">Contato</a>
       <a href="">Conheça nossos moradores</a>
       <a href="">Localização</a>
      </nav>
    </header>
  )
}

export default Header