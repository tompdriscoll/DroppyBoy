import React from 'react'

import FilePreview from './file_preview'

const FileIcon = props => {
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
    
    let file = props.file.file;
    let type = 'default';
    let name;

    if (props.file.file.type){
        type = props.file.file.type
        name = props.file.file.name
    } else {
        type = props.file.type
        name = props.file.name
    }
   
    if (type.includes('audio')){
        image = <img id='music-icon' className='files-item-icon' src={window.musicIcon}></img>
    } else if (type.includes('image')){
        image = <img className="files-item-icon" src={file}></img>
    }

   return( 
   <div className='files-icon-wrapper'>
       {prev}
        <div className='files-icon-contents'>
            <div className='files-icon-icon-wrapper'>
                {image}
            </div>
        <div className='file-title-date'>

            <div className='file-icon-title'>
                <p className='files-filename'>{name}</p>

            </div>
            <div className='added-updated-div'>
                <p className='added-updated'>Added </p>
                <p className='added-updated' id='when'>{date}</p>
            </div>
        </div>
        </div>
        <div className='files-buttons-div'>
            <div className='recent-button' onClick={() => previewOpen()}>Preview</div>
            <div className='recent-button' onClick={ e => (props.handleDelete(props.file))}>Delete</div>
            <svg className='files-ellipsis'>
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

export default FileIcon;