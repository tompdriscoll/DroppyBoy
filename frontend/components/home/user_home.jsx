import React from 'react';

import HomeMain from './home_main'
import HomeNav from './home_nav'
import HomeMainHeader from './home-main-header'
import HomeSideBar from './home-sidebar'
class UserHome extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            files: props.currentUser.files,
            uploaded: ''
        }
        this.handleUpload = this.handleUpload.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleUpload(file){
        debugger
        let newFileArray = this.props.currentUser.files
        newFileArray.push(file)
        this.setState({files: newFileArray})
    }

    
    handleDelete(file){
        let id = file.id
        let toDelete = this.props.currentUser.files.filter(file => file.id !== id)
        this.setState({files: toDelete})

        console.log(toDelete)
    }
    

    render(){
   
    return (  
    <div className="user-home">
        
        <HomeNav />
        <div id='home-main-container'>
            <HomeMainHeader/>
            <div id='main-content'>    
                <HomeMain handleDelete={this.handleDelete} files={this.state.files}/>
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