import React from 'react'

const FilePreview = props => {

return(
    <div className='preview-container1'>
        <div className='preview-container2'>
            <img className='prev-img' src={props.file.file}/>
        </div>
    </div>
    )
}

export default FilePreview