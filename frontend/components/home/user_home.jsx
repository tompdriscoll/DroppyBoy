import React from 'react';

import HomeMain from './home_main'
import HomeNav from './home_nav'
import HomeMainHeader from './home-main-header'
import HomeSideBar from './home-sidebar'
class UserHome extends React.Component {

    constructor(props){
        super(props)
    }
    

    render(){
   
    return (  
    <div className="user-home">
        
        <HomeNav />
        <div id='home-main-container'>
            <HomeMainHeader/>
            <div id='main-content'>    
                <HomeMain user={this.props.currentUser}/>
                <HomeSideBar />
            </div>
        </div>
        <div id='logout-button'>
            <button onClick={this.props.logout}>Logout</button>
        </div>
    </div>)

    }
}

export default UserHome;