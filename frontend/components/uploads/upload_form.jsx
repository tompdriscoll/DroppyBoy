import React from 'react';
import { withRouter } from 'react-router';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      file: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleInput(e) {
    this.setState({name: e.currentTarget.value});
  }

  handleFile(e){
    
    e.preventDefault();
    const file = e.currentTarget.files[0];
    // this.setState({name: file.name, file: file, time: file.lastModified})
    this.setState(
      (prevState) => {
        return {
          name: file.name, 
          file: file        
        };
      },
      () => document.getElementById('submit').click()
    );
   
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData();
    if (this.state.file) {
        formData.append('user[uploaded_files][]', this.state.file) 

    $.ajax({
      url: '/api/user',
      method: 'PATCH',
      data: formData,
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response.message),
      (response) => {
        console.log(response.responseJSON)
        this.props.history.push('/h');
      }
      
    );
    this.props.handleUpload(this.state.file)
    }
   
  }

  render() {
    const preview = this.state.url ? <img src={this.state.url} /> : null;
    return (
      <form id='upload-form' onSubmit={this.handleSubmit.bind(this)}>   
        <div id='create-new-file'>Upload File
        <input id='file-select' type="file"
          onChange={
            this.handleFile.bind(this)
           }/>
          </div>
          <button id='submit' type='submit'>Submit</button>
      </form>
    );
  }
}

export default withRouter(UploadForm);

// ,this.handleSubmit.bind(this)