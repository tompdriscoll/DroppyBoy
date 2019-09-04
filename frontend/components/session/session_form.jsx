import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
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
    const errorsLi = errors.session.map(error => {
      return <li>{error}</li>
    })

    const linkButton = formType === 'login' ? "Login" : "Sign Up"

    return (
      <form onSubmit={this.handleSubmit}>
        <header>{formType}</header>

        <ul className="errors">
          {errorsLi}
        </ul>

        <label htmlFor="email">email</label>
        <input type="text" id="email" value={this.state.email} onChange={this.update('email')} />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={this.state.password} onChange={this.update('password')} />

        <button>{linkButton}</button>
      </form>
    );
  }
}

export default SessionForm;