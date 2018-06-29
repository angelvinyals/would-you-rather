import React, { Component , Fragment} from 'react';
import { connect } from 'react-redux'
import { 
    BrowserRouter as Router,
	Route, 
	Switch
} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Login from  './Login'
import UserHome from  './UserHome'
import NoMatch from './NoMatch'
import Home from  './Home'

import LoadingBar from 'react-redux-loading'
import './App.css';

class App extends Component {

	componentDidMount (){		
		return this.props.dispatch(handleInitialData())
	}	

	render() {

  		const {authedUser} = this.props
  		console.log('render app...')

    	return (
    		<Fragment>
	    		<LoadingBar />	
	    		<Router>
	    		<div>
	    			<Route path="/" render={(props) => <Nav {...props} authedUser={authedUser} />} />   			    			    		
				    <Switch>					    
				        <Route path={`/${authedUser}`} component={UserHome}/>					 
						<Route path="/login" component={Login} />
						<Route exact path="/" component={Home} />
						<Route component={NoMatch} />					
					</Switch>
				</div>				    
			    </Router>
		    </Fragment>
    	);
  	}
}

function mapStateToProps ({authedUser}) {  

  return {
    authedUser,        
  };
}

export default connect(mapStateToProps)(App);
