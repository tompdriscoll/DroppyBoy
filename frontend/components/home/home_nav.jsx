import React from 'react';

const HomeNav = props => (
    <div id='home-nav'>
        <div className="home-nav-content">
            <a className="home-button" href="https://www.dropbox.com/">
                <svg className="home-button-logo" 
                aria-label="Home" 
                xmlns="http://www.w3.org/2000/svg" 
                role="img" 
                width="32px" 
                height="32px" 
                viewBox="0 0 32 32" 
                >
                    <title></title>
                    <path d="M8 2.4l8 5.1-8 5.1-8-5.1 8-5.1zm16 0l8 5.1-8 5.1-8-5.1
                    8-5.1zM0 17.7l8-5.1 8 5.1-8 5.1-8-5.1zm24-5.1l8 5.1-8 5.1-8-5.1 
                    8-5.1zM8 24.5l8-5.1 8 5.1-8 5.1-8-5.1z"></path>
                </svg>
            </a>
            <ul id='home-nav-list'>
                <li><h2>Home</h2></li>
                <li><h2>Files</h2></li>
                <li><h2>Paper</h2></li>
                <li><h2>Showcase</h2></li>
                <li><h2>Admin Console</h2></li>
            </ul>
            
        </div>
    </div>
        

)

export default HomeNav;