import React, { Component } from 'react';


class Login extends Component {
	
  	render() {
		const {usersArray, handleClickAvatar} = this.props
		return (
		    <div className='text-init'>
		        <p>Click avatar to login</p>
		        <ul className='users-list'>
		        {usersArray.map(user =>{
		        	return (
		        		<li key={user.id}>
		        			<div className="responsive" onClick={(e) => handleClickAvatar(e, user.id)}>
	  							<div className="container">
								  <img 
								  	src={user.avatarURL} 
								  	alt="Avatar" 
								  	className='image'
								  	/>
								  <div className="overlay">
								  	<div class="text"> {user.name}</div>						    
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



export default Login;