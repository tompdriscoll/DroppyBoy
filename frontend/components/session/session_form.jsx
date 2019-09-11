import React from 'react';
import { withRouter } from 'react-router'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      formType: this.props.formType
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);  
    this.props.processForm(user)
    .then(() => {  this.props.history.push('/h')    }); 
  }

  update(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    }
  }

  render() {
    let { errors, formType } = this.props;
    // const errorsLi = errors.session.map(error => {
    //   return <li>{error}</li>
    // })
    if (this.state.formType === "Sign up") {
      return (
        <form id='session-form' onSubmit={this.handleSubmit}>
          {/* <ul className="errors">
            {errorsLi}
          </ul> */}
          
          <input className='session-form-element' type="text" id="first_name" value={this.state.first_name} placeholder='First Name' onChange={this.update('first_name')} />     
          <input className='session-form-element' type="text" id="last_name" value={this.state.last_name} placeholder='Last Name' onChange={this.update('last_name')} />
          <input className='session-form-element' type="text" id="email" value={this.state.email} placeholder="Email" onChange={this.update('email')} />
          <input className='session-form-element' type="password" id="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />

          <div className="session-form-element" id='recaptcha'>This page is protected by reCAPTCHA, and subject to the Google <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a> 
            and 
            <a href="https://www.google.com/policies/terms/" target="_blank" rel="noopener noreferrer">Terms of service</a>
            .
          </div>
          <span className='session-form-element' id='terms-checkbox'>
            <input  type='checkbox'/>
            I agree to the 
            <a href="/terms" target="_blank" rel="noreferrer noopener"> Dropbox Terms</a>
          </span> 
          <button className='session-form-element'>{this.state.formType}</button>
        </form>
      );
    }
    else {
      return (
        <form id='session-form' onSubmit={this.handleSubmit}>
          
          <input className='session-form-element' type="text" id="email" value={this.state.email} placeholder="Email" onChange={this.update('email')} />
          <input className='session-form-element' type="password" id="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />

          <div className="session-form-element" id='recaptcha'>This page is protected by reCAPTCHA, and subject to the Google <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a> 
            and 
            <a href="https://www.google.com/policies/terms/" target="_blank" rel="noopener noreferrer">Terms of service</a>
            .
          </div>
          <span className='session-form-element' id='terms-checkbox'>
            <input  type='checkbox'/>
            Remember Me
            
          </span> 
          <button className='session-form-element'>{this.state.formType}</button>
          {/* <ul className="errors">
            {errorsLi}
          </ul> */}
        </form>
        )
    }
  }
}

export default withRouter(SessionForm);

