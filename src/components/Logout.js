import React, { Component } from 'react';
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

class Logout extends Component {

	handleClick = (e) => {
		e.preventDefault()
		this.props.dispatch(setAuthedUser(null))
	}

	handleClickAvatar = (e, id) =>{
		e.preventDefault()
		this.props.dispatch(setAuthedUser(id))
	}
	
  	render() {
		
		return (
		    
		        <button 
		        	onClick={this.handleClick}
		        	className='logout'
		        	>
		        	log  out
		        </button>
		    
		);    
    	
  	}
}



export default connect()(Logout);