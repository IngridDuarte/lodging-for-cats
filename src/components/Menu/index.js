import React from 'react'

const Menu = ({ list }) => {
  return (
    <nav>
      <ul>
        {
          list.map(item => (
            <li>
              <a href={item.url}>{item.label}</a>
            </li>)
          )
        }
      </ul>
    </nav>
  )
}

export default Menu
