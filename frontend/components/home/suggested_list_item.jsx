import React from 'react'


const SuggestedListItem = props => {
    return(
    <li>
        <img className='testy-boy' src={props.upload.path}/>
        <p className='suggested-file-name'>{props.upload.name}</p>
        <div className='suggested-folder'>
            <p> </p>
            <p> folder</p>
        
        </div>
    </li>    ) 
}

export default SuggestedListItem;