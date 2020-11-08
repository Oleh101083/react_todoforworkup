import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
              <nav className="top_row">
    <ul>
      <li><NavLink to="monday">Понеділок</NavLink></li>
      <li><NavLink to="tuesday">Вівторок</NavLink></li>
      <li><NavLink to="wednesday">Середа</NavLink></li>
      <li><NavLink to="thursday">Четвер</NavLink></li>
      <li><NavLink to="friday">П'ятниця</NavLink></li>
    </ul>
</nav>
        </div>
    )
}

export default Navbar
