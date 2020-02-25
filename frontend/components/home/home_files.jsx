import React from 'react';
import RecentItem from './recent_item'
import SuggestedListItem from './suggested_list_item'

import UploadForm from '../uploads/upload_from'
const HomeFiles = props => {  
    const fileList = props.files.map(file => (     
        <RecentItem  handleDelete={props.handleDelete} file={file} />
    )).reverse()

   
 
    return (
    <div id='home-main'>
      
        <div id='recent' className='section'>
            <ul id='recent-list'>
                {fileList}       
            </ul>
            
        </div>
   
    </div>)
   

}

export default HomeFiles;


