import React from 'react'
import UploadForm from '../uploads/upload_from'
const HomeSideBar = props => (
    <div id='home-sidebar'>
        <div className="home-sidebar-content">
            <ul id='home-sidebar-list'>
                <li><button id='create-new-file'>Create New File</button></li>
                <li className='new-upload-links'><h2>Upload Files</h2></li>
                <li className='new-upload-links'><h2>Upload Folder</h2></li>
                <li className='new-upload-links'><h2>New Shared Folder</h2></li>
                <li className='new-upload-links'><h2>Create Paper Doc</h2></li>
                <UploadForm/>
            </ul>
            
        </div>
    </div>
        

)

export default HomeSideBar