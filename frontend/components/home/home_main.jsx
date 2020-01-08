import React from 'react';
import RecentItem from './recent_item'
import SuggestedListItem from './suggested_list_item'

import UploadForm from '../uploads/upload_from'
const HomeMain = props => {  
    
    const recent = props.user.photoUrls
 
    const recentItems = recent.map(upload => (
        
        <RecentItem src={upload}/>
        
    )).reverse()
 
    return (
    <div id='home-main'>
        <div id='suggested' className='section'>
            <h2 className='section-header'> Suggested for you

                    

            </h2>
            <ul id='suggested-list'>
                                         
            </ul>
        </div>
        <div id='starred' className='section'>
            <h2 className='section-header'> Starred
                
             
                
            </h2>
            <p>
                When you star items, they’ll show up here for easy access. 
                {/* <a href="/#/help/desktop-web/star-doc-file-folder" target="_blank" rel="noopener noreferrer"> Learn more</a> */}
            </p>
        </div>
        <div id='recent' className='section'>
            <h2 className='section-header'> Recent

                    {/* <button className="hide-button">
                        <span className="">Hide</span>
                    </button> */}

            </h2>
            <ul id='recent-list'>
                {recentItems}       
            </ul>
            
        </div>
    </div>)
   

}

export default HomeMain;


