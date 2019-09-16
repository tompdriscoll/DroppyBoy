import React from 'react';

import HomeMain from './home_main'
import HomeNav from './home_nav'
import HomeMainHeader from './home-main-header'
import HomeSideBar from './home-sidebar'
const UserHome = props => {
     return (  
    <div className="user-home">
        
        <HomeNav />
        <div id='home-main-container'>
            <HomeMainHeader/>
            <div id='main-content'>    
                <HomeMain user={props.currentUser}/>
                <HomeSideBar />
            </div>
        </div>
        <div id='logout-button'>
            <button onClick={props.logout}>Logout</button>
        </div>
    </div>)

}

export default UserHome;