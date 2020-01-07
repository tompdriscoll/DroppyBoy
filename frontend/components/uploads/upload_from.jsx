import React from 'react';
import { withRouter } from 'react-router';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     file:   
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({name: e.currentTarget.value});
  }

  handleFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      debugger
        this.setState({name: file.name, url: fileReader.result, file: file});

    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
    const formData = new FormData();
    formData.append('upload[name]', this.state.name);
    if (this.state.file) {
        formData.append('upload[file]', this.state.file) 
        debugger
    
    $.ajax({
      url: '/api/uploads',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response.message),
      (response) => {
        console.log(response.responseJSON)
      }
    );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('upload[name]', this.state.name);
    if (this.state.file) {
        formData.append('user[uploaded_files]', this.state.file) 
        
    
    $.ajax({
      url: '/api/users',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response.message),
      (response) => {
        console.log(response.responseJSON)
      }
    );
    }
  }

  render() {
    console.log(this.state);
    const preview = this.state.url ? <img src={this.state.url} /> : null;
    return (
      <form id='upload-form' onSubmit={this.handleSubmit.bind(this)}>   
        <button id='create-new-file'>Upload File
        <input id='file-select' type="file"
          onChange={this.handleFile.bind(this)}/>
          <input id='file-submit' type='submit'/>
          </button>
      </form>
    );
  }
}

export default withRouter(UploadForm);

// ,this.handleSubmit.bind(this)