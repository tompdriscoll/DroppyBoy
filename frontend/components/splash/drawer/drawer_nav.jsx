import React from 'react'

const DrawerNav = () => (     
    <nav className="drawerNav">
        <button id="drawer-sign-in" className="drawer-link">Sign in</button>
        <a href="/install" className="drawer-link">Download</a>
        <button id="drawer-close" 
        className="drawer-link"></button>
    </nav> 
)

export default DrawerNav;