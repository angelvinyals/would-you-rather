import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionsList from './QuestionsList'
import Logout from './Logout'
import './Home.css';

class Home extends Component {	

  	render() {
  		const {authedUser, usersArray, usersId, user} = this.props
    	return (
    		<div className="home-title">
    			<h2>Would You Rather</h2>
    			<img 
				  	src={user.avatarURL} 
				  	alt="Avatar" 
				  	className='image-home'
				  	/>
		      <h3>Welcome,  {user.name}</h3>
		      <Logout />
		      <QuestionsList />
		    </div>
    	);
  	}
}

function mapStateToProps ({authedUser, questions}) {  

  return {
    authedUser,
    questionsArray:Object.values(questions),
     
  };
}


export default connect(mapStateToProps)(Home);