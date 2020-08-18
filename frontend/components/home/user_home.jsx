import React from 'react';

import HomeMain from './home_main'
import HomeFiles from './home_files'
import HomeNav from './home_nav'
import HomeMainHeader from './home-main-header'
import HomeSideBar from './home-sidebar'

class UserHome extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            files: props.currentUser.files,
            uploaded: '',
            main_content: 'Home',
            
        }
        this.handleUpload = this.handleUpload.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleMainChange = this.handleMainChange.bind(this)
        this.deleted = []
    }

    handleUpload(file){
        let reader = new FileReader()
        console.log(reader.readAsDataURL(file))
        let newFileArray = this.props.currentUser.files
        newFileArray.push({file: file})
        this.setState({files: this.props.currentUser.files})   
        this.previewFile(file)
    }

     previewFile(file) {
        const preview = document.getElementById('testy')
        
        const reader = new FileReader();
      
        reader.addEventListener("load", function () {
          // convert image file to base64 string
          let square = document.getElementsByClassName('recent-item-icon')[0]
          square.src = reader.result;
        }, false);
      
        if (file) {
          reader.readAsDataURL(file);
        }
      }

    
    handleDelete(file){
        this.deleted.push(file.id)
        let toDelete = this.props.currentUser.files.filter(file => (!this.deleted.includes(file.id)))
        this.setState({files: toDelete})
        console.log(toDelete)

        const formData = new FormData();
        if (file) {
        formData.append(`user[delete_id]`, `${file.id}`) 
            $.ajax({
            url: '/api/user',
            method: 'PUT',
            data: formData,
            contentType: false,
            processData: false
            }).then(
            (response) => console.log(response.message),
            (response) => {
                console.log(response.responseJSON)
            }
            
            );
        }
        this.props.history.push('/h')
    }

    handleMainChange(type){
        this.setState({main_content: type})
    }
    

    render(){
        let MainContent;

        this.state.main_content === 'Home' ?  MainContent = <HomeMain handleDelete={this.handleDelete} files={this.state.files}/> 
        : MainContent = <HomeFiles handleDelete={this.handleDelete} files={this.state.files}></HomeFiles>
    return (  
    <div className="user-home">
        
        <HomeNav handleMainChange={this.handleMainChange}/>
        <div id='home-main-container'>
            <HomeMainHeader name={this.state.main_content} logout={this.props.logout}/>
            <div id='main-content'>    
                {MainContent}
                <HomeSideBar handleUpload={this.handleUpload}/>
            </div>
        </div>

    </div>)

    }
}

export default UserHome;