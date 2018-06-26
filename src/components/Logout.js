import React from 'react'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'


const Logout = ({dispatch, history}) => {
	dispatch(setAuthedUser(null))
	history.push("/")
	return(
		<div>bye...</div>
	)
}

export default connect()(Logout);