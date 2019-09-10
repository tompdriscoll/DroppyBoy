import React from 'react'

class DrawerNav extends React.Component {
    
    scrollClose() {
            
        var drawer = document.getElementById('drawer');  
        if (window.scrollY >= 500) {
            drawer.classList.add('closed')
            drawer.classList.remove('drawer')
        }
           
        
    }

    closeDrawer() {
        const drawer = document.getElementById("drawer")
        const closeButton = document.getElementById('drawer-close')
        drawer.classList.remove('drawer')
        drawer.classList.add("closed")
        closeButton.classList.add('drawer-link')
    }
    render() {
        return (
            <nav className="drawerNav">
                <button id="drawer-sign-in" className="drawer-link">Sign in</button>
                <a href="/install" className="drawer-link">Download</a>
                <button className='noShow' id="drawer-close" 
                 onClick={this.closeDrawer}></button>
            </nav>
        )
    }
}

export default DrawerNav;