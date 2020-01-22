import React from 'react';

import HomeMain from './home_main'
import HomeNav from './home_nav'
import HomeMainHeader from './home-main-header'
import HomeSideBar from './home-sidebar'
class UserHome extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            files: props.currentUser.files
        }
        this.handleUpload = this.handleUpload.bind(this)
    }

    handleUpload(){
        debugger
        this.setState({files: this.props.currentUser.files})
    }
    

    render(){
   
    return (  
    <div className="user-home">
        
        <HomeNav />
        <div id='home-main-container'>
            <HomeMainHeader/>
            <div id='main-content'>    
                <HomeMain files={this.state.files}/>
                <HomeSideBar handleUpload={this.handleUpload}/>
            </div>
        </div>
        <div id='logout-button'>
            <button onClick={this.props.logout}>Logout</button>
        </div>
    </div>)

    }
}

export default UserHome;