import React from 'react'
import Menu from '../Menu'

const Header = () => {

  const menuList = [
    { label: "sobre nós", url: "http://google.com" },
    { label: "agendamento", url: "http://google.com" },
    { label: "contato", url: "http://google.com" },
    { label: "conheça nossos moradores", url: "http://google.com" },
    { label: "localização", url: "http://google.com" }
  ]

  return (
    <header>
      <div>
        <img href="" alt=""></img>
      </div>
      <Menu list={menuList} />
    </header>
  )
}

export default Header