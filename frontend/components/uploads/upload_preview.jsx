import React from 'react'

class UploadPreview extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){

        return (
            <div>
                <img src={this.props.img}></img>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}