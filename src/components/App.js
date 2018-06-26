import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
    BrowserRouter as Router,
	Route, 
	Redirect,
	Switch
} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'

import Login from  './Login'
import Home from  './Home'
import NoMatch from './NoMatch'
import Logout from './Logout'
import LoadingBar from 'react-redux-loading'
import './App.css';

class App extends Component {

	componentDidMount (){
		this.props.dispatch(handleInitialData())
		return <Redirect to={`/login`}/>
	}	

	render() {
  		const {authedUser} = this.props

    	return (
    		<Router>
	    		<div>
		    		<LoadingBar />		    		
				    <Switch>					    
				        <Route path={`/${authedUser}/questions`} component={Home}/>
					 	<Route path="/logout"  component={Logout}/>
						<Route path="/login" component={Login} />
						<Route path="/" component={Login} />						
						<Route component={NoMatch} />
					</Switch>		
			    </div>
		    </Router>
    	);
  	}
}

function mapStateToProps ({authedUser}) {  

  return {
    authedUser,        
  };
}

export default connect(mapStateToProps)(App);
