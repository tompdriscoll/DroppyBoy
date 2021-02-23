import React from 'react'
import UploadForm from '../uploads/upload_form'
const HomeSideBar = props => (
    <div id='home-sidebar'>
        <div className="home-sidebar-content">
            <ul id='home-sidebar-list'>        
                <UploadForm handleUpload={props.handleUpload}/>
            </ul>
            
        </div>
    </div>
        

)

export default HomeSideBar