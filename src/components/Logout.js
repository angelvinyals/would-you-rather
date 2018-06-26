import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {   Redirect } from "react-router-dom";
import {setAuthedUser} from '../actions/authedUser'


const Logout = ({dispatch}) => (
	<Fragment>
		dispatch(setAuthedUser(null))
		<Redirect to="/login"/>
	</Fragment>
)

export default connect()(Logout);