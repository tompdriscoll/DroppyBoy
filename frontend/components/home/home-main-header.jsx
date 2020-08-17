import React from 'react';
import Notifications from'./notifications'
const HomeMainHeader = props => (

        <header id='main-header'>
            <div id='main-header-content'>
                <h1>{props.name}</h1>
                <div className="header-end" >
                    <form id='header-search'>
                        <span className="search-chips"></span>
                        <input className="search__input" 
                            maxLength="200" 
                            placeholder="Search your content" 
                            type="text" 
                            />
                    </form>
                    <Notifications/>
                    <div id='propic-container'>
                        <div id='pro-pic'>
                        </div>
                        <div id='logout-button'>
                            <button onClick={props.logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

)

export default HomeMainHeader;