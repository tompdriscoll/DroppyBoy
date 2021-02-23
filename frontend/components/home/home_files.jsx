import React from 'react';
import FileIcon from './file_icon'
import SuggestedListItem from './suggested_list_item'

import UploadForm from '../uploads/upload_form'
const HomeFiles = props => {  

    const fileList = props.files.map(file => (     
        <FileIcon  handleDelete={props.handleDelete} file={file} />
    )).reverse()

   
 
    return (
    <div id='home-main'>
      
        <div id='files' className='section'>
            <ul id='files-list'>
                {fileList}       
            </ul>
            
        </div>
   
    </div>)
   

}

export default HomeFiles;


