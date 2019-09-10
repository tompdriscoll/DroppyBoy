import React from 'react'
import SignUpForm from '../../session/signup_form_container'
import LogInForm from '../../session/login_from_container'
import DrawerNav from './drawer_nav'
class Drawer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: 'Sign up'
        }
        this.changeForm = this.changeForm.bind(this)
    }

    changeForm() {
        let newForm = this.state.form === "Sign in" ? 'Sign up' : 'Sign in'
        this.setState({form: newForm})
      }



    render() {
        
        let form = (this.state.form === 'Sign up' ?  <SignUpForm/> : <LogInForm/>)
        let formChangeButton = (this.state.form === 'Sign up' ?  'sign into your account' : 'create an account')
        return (
            <div className="drawer" id='drawer'>
                <div id='drawer-contents'>
                    <DrawerNav form={this.state.form} changeForm={this.changeForm}/>
                    <div id='drawer-form'>
                        <header>
                            <h2>{this.state.form}</h2>
                            <div className='session-header-sub'>
                            or <p onClick={this.changeForm}> {formChangeButton}</p>
                            </div>
                        </header>
                        {form}
                    </div>
                </div>
            </div>
        )
    }

}
export default Drawer;