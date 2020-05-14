import React from 'react'
import FilePreview from './file_preview'


const RecentItem = props => {
    let time;
    if (props.file['time']) {
         time = new Date(props.file['time'])
    } else{
         time = new Date
    }
    let date = time.getMonth() + 1 + '/' + time.getDate() 
    let prev = null
    let previewOpen = function preview(){
        prev = <FilePreview file={props.file['file']}/>
    }
   return( 
   <div className='recent-item-wrapper'>
       {prev}
        <div className='recent-item-contents'>
            <div className='recent-item-icon-wrapper'>
                <img className='recent-item-icon' src={props.file['file']}></img>
            </div>
        <div className='home-title-date'>

            <div className='home-item-title'>
                <p className='home-filename'>{props.file['name']}</p>
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
            <div className='added-updated-div'>
                <p className='added-updated'>Added </p>
                <p className='added-updated' id='when'>{date}</p>
            </div>
        </div>
        </div>
        <div className='recent-buttons-div'>
            <div className='recent-button' onClick={() => previewOpen}>Preview</div>
            {/* <div className='recent-button' onClick={ e => (props.handleDelete(props.file))}>Delete</div> */}
            <svg className='recent-ellipsis'>
                    <g fill="none" fillRule="evenodd">
                        <g fill="#637282">
                            <circle cx="10.5" cy="16.5" r="1.5"></circle>
                            <circle cx="15.5" cy="16.5" r="1.5"></circle>
                            <circle cx="20.5" cy="16.5" r="1.5"></circle>
                        </g>
                    </g>
            </svg>
        </div>

       
    </div>)
}

export default RecentItem;