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
                            // placeholder="Search your content" 
                            type="text" 
                            />
                    </form>
                    <Notifications/>
                    <div id='propic-container'>
                        <div id='pro-pic'>
                            <svg>

                            <title>Abstract user icon</title>

                            <defs>
                                <clipPath id="circular-border">
                                <circle cx="300" cy="300" r="280" />
                                </clipPath>
                                <clipPath id="avoid-antialiasing-bugs">
                                <rect width="100%" height="498" />
                                </clipPath>
                            </defs>
                            
                            <circle cx="16" cy="16" r="16" fill="black" clip-path="url(#avoid-antialiasing-bugs)" />
                            <circle cx="16" cy="12" r="6.5" fill="white"/>
                            <circle cx="16" cy="29" r="11.7"  fill="white"/>
                            </svg>
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

