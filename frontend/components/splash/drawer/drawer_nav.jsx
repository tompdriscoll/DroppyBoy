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
        let button = (this.props.form === 'Sign up' ?  'Sign in' : 'Sign up')
        return (
            <nav className="drawerNav">
                <button id="drawer-sign-in" className="drawer-link" onClick={this.props.changeForm}>{button}</button>
                <a href="/install" className="drawer-link">Download</a>
                <button className='noShow' id="drawer-close" 
                 onClick={this.closeDrawer}></button>
            </nav>
        )
    }
}

export default DrawerNav;