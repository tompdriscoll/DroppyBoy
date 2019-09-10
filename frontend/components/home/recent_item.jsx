import React from 'react'



const RecentItem = () => (

    <div className='recent-item-wrapper'>
        <div className='recent-item-icon'>

        </div>
        <div className='recent-item-contents'>
            <div className='recent-item-title'>
                <p>title</p>
                <button className="star" >
                    <svg width="32" 
                    height="32" 
                    viewBox="0 0 32 32">
                        <path fillRule="evenodd" clipRule="evenodd" 
                        d="M16 18.657l2.138 1.197-.478-2.403 1.799-1.663-2.433-.289L16 
                        13.275l-1.026 2.224-2.433.289 1.799 1.663-.478 2.403L16 18.657zm-4.944 
                        5.06l1.104-5.558L8 14.312l5.627-.667L16 8.5l2.373 5.145 5.627.667-4.16 
                        3.847 1.104 5.558L16 20.949l-4.944 2.768z" className="mc-icon--mf">
                        </path>
                    </svg>
                </button>
            </div>
            <div>
                <p className='added-updated'>added </p>
                <p className='added-updated' id='when'>yesterday</p>
            </div>
        </div>
    </div>
)

export default RecentItem;