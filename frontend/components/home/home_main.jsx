import React from 'react';
import RecentItem from './recent_item'
import SuggestedListItem from './suggested_list_item'

import UploadForm from '../uploads/upload_form'
const HomeMain = props => {  
    
    const recentItems = props.files.map(file => {
        return <RecentItem  id={file.id} handleDelete={props.handleDelete} file={file} />
        }).reverse()

   
    return (
    <div id='home-main'>
        <div id='suggested' className='section'>
            <h2 className='section-header'> Suggested for you

                    

            </h2>
            <ul id='suggested-list'>
                                         
            </ul>
        </div>
        <div id='recent1' className='section'>
            <h2 className='section-header'> Recent

                    {/* <button className="hide-button">
                        <span className="">Hide</span>
                    </button> */}

            </h2>
            <ul id='recent-list'>
                {recentItems}       
            </ul>
            
        </div>
        <div id='starred' className='section'>
            <h2 className='section-header'> Starred
                
             
                
            </h2>
            <p>
                When you star items, they’ll show up here for easy access. 
            </p>
        </div>
    </div>)
   

}

export default HomeMain;


