import React from 'react'

class NavBarNavLinks extends React.Component {
    
    openDrawer() {
        let drawer = document.getElementsByClassName('closed')[0]
        drawer.classList.remove('closed')
        drawer.classList.add('drawer')
    }
        
    render() {
        return(
            <div className="splash-nav-nav-buttons">
                <button className="" 
                tabIndex="0"
                onClick={this.openDrawer}>Sign in</button>
                <button className="" 
                tabIndex="0"
                onClick={this.openDrawer}>Sign up</button>
            </div>

        )
    }

}

export default NavBarNavLinks;