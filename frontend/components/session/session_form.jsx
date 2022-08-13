import React from 'react';
import { withRouter } from 'react-router'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };
    this.formType = this.props.formType
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this)
    this.demoSignUp = this.demoSignUp.bind(this)
  }

  handleSubmit(event) { 
    event.preventDefault();
    let form = this
    const user = Object.assign({}, this.state);  
    this.props.processForm(this.state)  
    .then(response => {  
      form.props.history.push('/h')    
    });
  }

  update(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    }
  }

  demoSignUp(e){
    e.preventDefault();
    let alphaNumeric = 'abcdefghijklmnopqrstuvwxyz1234567890'
    let digest = ''
    while (digest.length < 5) digest += alphaNumeric[Math.floor((Math.random() * 36))];
    let email = 'test' + digest + '@user.com'
    console.log(email)
    const guest = {first_name: "test", last_name: 'user', email: email, password: "hunter12"}
    
    var i = 0;
  
  var speed = 50; /* The speed/duration of the effect in milliseconds */
    let typing =  function () {document.getElementById("email").value += email.charAt(i);
  }

    if (i < email.length) {
      document.getElementById("email").value += email.charAt(i);
      i++;
      setTimeout(typing,speed);
    }  else {
      i=0
    }

    
    
    
    
    
    
    
    // this.props.processForm(guest)
  }

  demoLogin(e){
    e.preventDefault();
    const guest = {first_name: "test", last_name: 'user', email: "test@user.com", password: "hunter12"}
    this.props.processForm(guest)
  }

  render() {
    let { errors, formType } = this.props;
    let errorsLi = []
    if (errors.session){
      if (errors.session.message){
        errorsLi = <li className='error-li'>{errors.session.message}</li>
      } else{ errorsLi = errors.session.map(error => {
          return <li className='error-li'>{error}</li>
      })}
      
    }
    
    if (this.formType === "Sign up") {
      return (
        <form id='session-form' onSubmit={this.handleSubmit}>
         
          
          <input className='session-form-element' type="text" id="first_name" value={this.state.first_name} placeholder='First Name' onChange={this.update('first_name')} />     
          <input className='session-form-element' type="text" id="last_name" value={this.state.last_name} placeholder='Last Name' onChange={this.update('last_name')} />
          <input className='session-form-element' type="text" id="email" value={this.state.email} placeholder="Email" onChange={this.update('email')} />
          <input className='session-form-element' type="password" id="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />

          <div className='error-box'>
            <ul className='error-ul'>
              {errorsLi}
            </ul>
          </div>

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
          <button className='session-form-element'>{this.formType}</button>
          <button id="demo-user"
          className='session-form-element'
          type="submit" 
          onClick={this.demoSignUp}
          value="Demo User">Demo User</button> 
        </form>
      );
    }
    else {
      return (
        <form id='session-form' onSubmit={this.handleSubmit}>
          <input className='session-form-element' type="text" id="email" value={this.state.email} placeholder="Email" onChange={this.update('email')} />
          <input className='session-form-element' type="password" id="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />


          <div className='error-box'>
            <ul className='error-ul'>
              {errorsLi}
            </ul>
          </div>

          <div className="session-form-element" id='recaptcha'>This page is protected by reCAPTCHA, and subject to the Google <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a> 
            and 
            <a href="https://www.google.com/policies/terms/" target="_blank" rel="noopener noreferrer"> Terms of service</a>
            .
          </div>
          <span className='session-form-element' id='terms-checkbox'>
            <input  type='checkbox'/>
            Remember Me
            
          </span> 
          <button className='session-form-element'>{this.formType}</button>
          
          <button id="demo-user" className='session-form-element' type="submit"  onClick={this.demoLogin} value="Demo User">Demo Login</button> 
        </form>
      )
    }
  }
}

export default withRouter(SessionForm);

