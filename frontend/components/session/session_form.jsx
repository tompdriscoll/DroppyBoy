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

    const linkButton = formType === 'login' ? "Login" : "Sign Up"

    return (
      <form id='session-form' onSubmit={this.handleSubmit}>
        <header>
        {formType}
        <br></br>
        <div>
          or
          <a href='/signin'> sign into your account</a>
        </div>
        </header>

        {/* <ul className="errors">
          {errorsLi}
        </ul> */}
        
        <input type="text" id="first_name" value={this.state.first_name} placeholder='First Name' onChange={this.update('first_name')} />
        
        <input type="text" id="last_name" value={this.state.last_name} placeholder='Last Name' onChange={this.update('last_name')} />
       
        <input type="text" id="email" value={this.state.email} onChange={this.update('email')} />
        
        <input type="password" id="password" value={this.state.password} onChange={this.update('password')} />

        <button>{linkButton}</button>
      </form>
    );
  }
}

export default SessionForm;