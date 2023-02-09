import Link from 'next/link'
import React from 'react'

export default function Navbar() {

    return (
        <div className="navbar_comp">
            <ul className="navbar_ribbon">
                <li><Link nav_href='/admin'>Admin</Link></li>
                <li><Link nav_href='/challenges'>Challenges</Link></li>
                <li><Link nav_href='/scoreboard'>Scoreboard</Link></li>
                <li><Link nav_href='/about'>About</Link></li>
            </ul>
        </div>
    )
}
