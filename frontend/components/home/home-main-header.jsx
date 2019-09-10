import React from 'react';

const HomeMainHeader = props => (

        <header id='main-header'>
            <div id='main-header-content'>
                <h1>Home</h1>
                <div className="header-end" >
                    <form>
                        <span className="search-chips"></span>
                        <input className="search__input" 
                            maxLength="200" 
                            placeholder="Search your content" 
                            type="text" 
                            />
                    </form>
                
                    <h2>notifs</h2>
                    <h2>propic</h2>
                </div>
            </div>
        </header>

)

export default HomeMainHeader;