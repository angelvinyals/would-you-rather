import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser'
import Login from  './Login'
import Home from  './Home'
import LoadingBar from 'react-redux-loading'
import './App.css';

class App extends Component {

	componentDidMount (){
		//console.log('...componetDidMount')
		this.props.dispatch(handleInitialData())
	}

	handleClickAvatar = (e, id) =>{
		e.preventDefault()
		this.props.dispatch(setAuthedUser(id))
	}

  	render() {
  		const {authedUser, usersArray, usersId, users} = this.props
    	return (
    		<div>
    		<LoadingBar />
		      {authedUser ? (
		        <Home user={users[authedUser]}/>
		      ) : (		      
		      	<Login 
		      		usersArray={usersArray}
		      		handleClickAvatar={this.handleClickAvatar}
		      	/>		     
		      )}
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


export default connect(mapStateToProps)(App);
