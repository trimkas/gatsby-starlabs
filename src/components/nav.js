import React from 'react'
import { Link } from "gatsby"

const NavMenu = () => (
    <ul style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        }}>

        <Link activeClassName="navLinkActive" className ='navLink' to='/'> Home </Link>
        <Link activeClassName="navLinkActive" className ='navLink' to='/about/'> About </Link>
        <Link activeClassName="navLinkActive" className ='navLink' to='/contact/'> Contact </Link>
        
    </ul>   
)

export default NavMenu