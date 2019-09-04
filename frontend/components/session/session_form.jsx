import React from 'react';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    debugger
    const user = Object.assign({}, this.state);  // {user: {username, password}}
    this.props.processForm(user);
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

    const linkButton = formType === 'login' ? "Login" : "Sign up"

    return (
      <form id='session-form' onSubmit={this.handleSubmit}>
        <header>
        <h2>{formType}</h2>
        <div class='session-header-sub'>
          or
          <a href='/signin'> sign into your account</a>
        </div>
        </header>

        {/* <ul className="errors">
          {errorsLi}
        </ul> */}
        
        <input class='session-form-element' type="text" id="first_name" value={this.state.first_name} placeholder='First Name' onChange={this.update('first_name')} />
        
        <input class='session-form-element' type="text" id="last_name" value={this.state.last_name} placeholder='Last Name' onChange={this.update('last_name')} />
       
        <input class='session-form-element' type="text" id="email" value={this.state.email} placeholder="Email" onChange={this.update('email')} />
        
        <input class='session-form-element' type="password" id="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />

        <input class='session-form-element' type='checkbox'/> 
        <p class='session-header-sub'>This page is protected by reCAPTCHA, and subject to the Google Privacy Policy and Terms of service.</p>
        <button class='session-form-element'>{linkButton}</button>
      </form>
    );
  }
}

export default SessionForm;