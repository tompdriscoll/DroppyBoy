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
                <button className="star" >
                <svg width="32" 
                    height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238.98 227.79">
                <defs><style>.cls-1.fill:white;.cls-2.fill:blue;</style></defs><g id="Layer_2" 
                data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon 
                className="cls-1" points="62.83 144.57 5.38 89.35 84.16 77.34 118.93 5.65 
                154.69 76.86 233.62 87.77 176.94 143.78 190.96 222.23 120.17 185.63 49.9 
                223.2 62.83 144.57"/><path className="cls-2" d="M119,11.3l32.89,65.51L153,
                79.16l2.61.36,72.61,10-52.14,51.52-1.87,1.85.46,2.59,12.89,72.16L122.49,184l-2.34-1.21-2.32,
                1.24L53.19,218.61l11.89-72.33.43-2.6-1.9-1.82L10.77,91.06,83.24,80l2.59-.39L87,77.25,
                119,11.3M118.89,0,82.48,75.07,0,87.64l60.15,57.82L46.61,227.79l73.58-39.33,74.12,
                38.31-14.67-82.13L239,86,156.33,74.56,118.89,0Z"/></g></g></svg>
                    
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
