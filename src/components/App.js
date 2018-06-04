import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import './App.css';

class App extends Component {

	componentDidMount (){
		//console.log('...componetDidMount')
		this.props.dispatch(handleInitialData())
	}

  	render() {
  		const {authedUser, usersArray, usersId} = this.props
    	return (
    		<div>
		      {authedUser ? (
		        <p>is logged</p>
		      ) : (
		        <p>is NOT logged</p>
		        
		      )}
		    </div>
    	);
  	}
}

function mapStateToProps ({authedUser, users}) {  

  return {
    authedUser,
    usersArray:Object.values(users),
    usersId:Object.keys(users),    
  };
}


export default connect(mapStateToProps)(App);
