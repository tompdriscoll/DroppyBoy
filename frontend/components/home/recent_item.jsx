import React from 'react'
import FilePreview from './file_preview'


const RecentItem = props => {
    let image;
    let time;

    if (props.file['time']) {
         time = new Date(props.file['time'])
    } else{
         time = new Date
    }

    let date = time.getMonth() + 1 + '/' + time.getDate() 
    
    let prev = null
    // let previewOpen = function preview(){
    //     prev = <FilePreview file={props.file['file']}/>
    // }
    
    let file = props.file.file
    let type;
    let name;
    
    if (props.file.file.type){
        type = props.file.file.type
        name = props.file.file.name
    } else {
        type = props.file.type
        name = props.file.name
    }
   

   
   
    if (type.includes('audio')){
        image = <img id='music-icon' src={window.musicIcon}></img>
    } else if (type.includes('image')){
        image = <img className="recent-item-icon" src={file}></img>
    }

    let star;
    let starMarker = 2
    let fave = function fave() {
        if (starMarker === 1){
            star = <svg viewBox="0 0 24 24" fill="none" className="dig-UIIcon dig-UIIcon--standard" width="24" height="24" focusable="false"><path d="M20.836 9.91096L14.7305 9.02446L12 3.49146L9.2695 9.02446L3.164 9.91096L7.594 14.2295L6.7605 20.3935L12 17.4415L17.2395 20.3935L16.406 14.2295L20.836 9.91096Z" fill="currentColor"></path></svg>
                   
            starMarker = 2
        } else {
            star = <svg viewBox="0 0 24 24" fill="none" className=" " width="24" 
            height="24" focusable="false"><path d="M20.8361 9.91108L14.7306 9.02458L12.0001 3.49158L9.26956
            9.02458L3.16406 9.91108L7.59406 14.2296L6.76056 20.3936L12.0001 17.4416L17.2396 20.3916L16.4061 
            14.2296L20.8361 9.91108ZM12.0001 15.7196L8.65006 17.6061L9.18106 13.6821L6.38656 10.9586L10.2646
            10.3951L12.0001 6.88158L13.7346 10.3956L17.6126 10.9591L14.8181 13.6826L15.3501 17.6066L12.0001 
            15.7196Z" fill="currentColor"></path>
            </svg>
                     
            starMarker = 1
        }
    }
    fave()
   return( 
   <div className='recent-item-wrapper'>
       {prev}
        <div className='recent-item-contents'>
            <div className='recent-item-icon-wrapper'>
                {image}
            </div>
        <div className='home-title-date'>

            <div className='home-item-title'>
                <p className='home-filename'>{name}</p>
                <button className="star" onClick={ e => fave()}>
     
                 {star}  
                </button>
            </div>
            <div className='added-updated-div'>
                <p className='added-updated'>Added </p>
                <p className='added-updated' id='when'>{date}</p>
            </div>
        </div>
        </div>
        <div className='recent-buttons-div'>
            {/* <div className='recent-button' onClick={() => previewOpen}>Preview</div> */}
            <div className='recent-button' onClick={ e => (props.handleDelete(props.file))}>Delete</div>
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
