import React from 'react';
import RecentItem from './recent_item'
const HomeMain = props => (   
    <div id='home-main'>
        <div id='suggested' className='section'>
            <h2 className='section-header'> suggested for you

                    <button className="hide-button">
                        <span className="">Hide</span>
                    </button>

            </h2>
            <ul id='suggested-list'>
                <div className='testy-boy'/>
                <div className='testy-boy'/>
                <div className='testy-boy'/>
                <div className='testy-boy'/>               
            </ul>
        </div>
        <div id='starred' className='section'>
            <h2 className='section-header'> Recent
                
                <button className="hide-button">
                    <span className="">Hide</span>
                </button>
                
            </h2>
            <p>
                When you star items, they’ll show up here for easy access. 
                <a href="/#/help/desktop-web/star-doc-file-folder" target="_blank" rel="noopener noreferrer"> Learn more</a>
            </p>
        </div>
        <div id='recent' className='section'>
            <h2 className='section-header'> Recent

                    <button className="hide-button">
                        <span className="">Hide</span>
                    </button>

            </h2>
            <ul id='recent-list'>
                <RecentItem/>           
                <RecentItem/>     
                <RecentItem/> 
                <RecentItem/> 
                <RecentItem/> 
                <RecentItem/> 
                <RecentItem/>           
                <RecentItem/>     
                <RecentItem/> 
                <RecentItem/> 
                <RecentItem/> 
                <RecentItem/>
            </ul>
        </div>
    </div>
   

)

export default HomeMain;


