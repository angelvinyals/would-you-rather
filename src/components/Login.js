import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'


class Login extends Component {

	handleClickAvatar = (e, id) =>{
		e.preventDefault()
		this.props.dispatch(setAuthedUser(id))
	}
	
  	render() {
		const {usersArray, authedUser} = this.props

		if(authedUser) {return <Redirect to={`/${authedUser}/questions`} />}

		return (
		    <div className='text-init'>
		        <p>Click avatar to login to accesss the poll</p>
		        <ul className='users-list'>
		        {usersArray.map(user =>{
		        	return (
		        		<li key={user.id}>
		        			<div className="responsive" onClick={(e) => this.handleClickAvatar(e, user.id)}>
	  							<div className="container">
								  <img 
								  	src={user.avatarURL} 
								  	alt="Avatar" 
								  	className='image'
								  	/>
								  <div className="overlay">
								  	<div className="text"> {user.name}</div>						    
								  </div>
								</div>
							</div>
		        		</li>
		        	)
		        })}
		        </ul>
		    </div>
		);    
    	
  	}
}


function mapStateToProps ({authedUser, users}) {  

  return {
    authedUser,
    users,
    usersArray:Object.values(users),
    usersId:Object.keys(users),    
  };
}


export default connect(mapStateToProps)(Login);

