import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
	BrowserRouter as Router, 
	Route, 
	Redirect,
	Switch
} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser'
import Login from  './Login'
import Home from  './Home'
import NoMatch from './NoMatch'
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
  		const {authedUser, usersArray, users, match} = this.props
    	return (
    		<Router>
	    		<div>
		    		<LoadingBar />
				    {authedUser ? (
				        <Redirect to={`/${authedUser}`}/>
				    ) : (
				    	<Redirect to="/login"/>	     
				    )}
				    <Switch>
					    <Route 
				        	path={`/${authedUser}`} 
				        	render={({ match }) => 
				        		<Home
				        			match={match} 
				        			user={users[authedUser]}/>
				        	}
				        />
					    <Route 
				        	path="/login" 
				        	render={() => 		      
						      	<Login 
						      		usersArray={usersArray}
						      		handleClickAvatar={this.handleClickAvatar}
						      	/>
						    }
						/>
						<Route component={NoMatch} />
					</Switch>		
			    </div>
		    </Router>
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
