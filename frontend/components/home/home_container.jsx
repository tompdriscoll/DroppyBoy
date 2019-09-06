import React from 'react'
import { connect } from 'react-redux'

import HomeNav from './home_nav'
import {logout} from '../../actions/session_actions'

const msp = state => ({
    test: 'hello'
})

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(msp,mdp)(HomeNav)