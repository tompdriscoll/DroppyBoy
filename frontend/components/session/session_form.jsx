import React from 'react';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      linkButton: this.props.formType
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeLinkButton = this.changeLinkButton.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);  // {user: {username, password}}
    this.props.processForm(user)
  }

  update(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    }
  }

  changeLinkButton() {
    let newLinkButton = this.state.linkButton === "Log in" ? 'Sign up' : 'Log in'
    this.setState({linkButton: newLinkButton})
  }

  render() {
    let { errors, formType } = this.props;
    const errorsLi = errors.session.map(error => {
      return <li>{error}</li>
    })
    if (this.state.linkButton === "Sign up") {
      return (
        <form id='session-form' onSubmit={this.handleSubmit}>
          <ul className="errors">
            {errorsLi}
          </ul>
          <header>
            <h2>{formType}</h2>
            <div className='session-header-sub'>
              or <p onClick={this.changeLinkButton}> sign into your account</p>
            </div>
          </header>
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
            <a href="/terms" target="_blank" rel="noreferrer noopener">Dropbox Terms</a>
          </span> 
          <button className='session-form-element'>{this.state.linkButton}</button>
        </form>
      );
    }
    else {
      return (
        <form id='session-form' onSubmit={this.handleSubmit}>
          
          <header>
            <h2>{this.state.linkButton}</h2>
            <div className='session-header-sub'>
              or
              <p onClick={this.changeLinkButton}> create an account</p>
            </div>
          </header>
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
          <button className='session-form-element'>{this.state.linkButton}</button>
          <ul className="errors">
            {errorsLi}
          </ul>
        </form>
        )
    }
  }
}

export default SessionForm;

