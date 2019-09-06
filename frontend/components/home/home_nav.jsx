import React from 'react';

const HomeNav = props => (

        
    <div className="home-nav">
        <ul>
            <li><h2>Home</h2></li>
            <li><h2>Files</h2></li>
            <li><h2>Paper</h2></li>
            <li><h2>Showcase</h2></li>
            <li><h2>Admin Console</h2></li>
        </ul>
        <button onClick={props.logout}>Logout</button>
    </div>

)

export default HomeNav;