import React from 'react'
import NavLinks from './NavLinks'


export default function Navbar() {

  return (
    <div className="navbar_comp">
      <ul className="navbar_ribbon">
        <li><NavLinks nav_href='/admin'>Admin</NavLinks></li>
        <li><NavLinks nav_href='/challenges'>Challenges</NavLinks></li>
        <li><NavLinks nav_href='/scoreboard'>Scoreboard</NavLinks></li>
        <li><NavLinks nav_href='/about'>About</NavLinks></li>
      </ul>
    </div>
  )
}
