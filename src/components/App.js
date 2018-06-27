import React, { Component , Fragment} from 'react';
import { connect } from 'react-redux'
import { 
    BrowserRouter as Router,
	Route, 
	Redirect,
	Switch
} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Login from  './Login'
import Home from  './Home'
import NewPoll from  './NewPoll'
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
    		<Fragment>
	    		<LoadingBar />	
	    		<Router>
	    		<div>
	    			<Route path="/" render={(props) => <Nav {...props} authedUser={authedUser} />} />   			    			    		
				    <Switch>					    
				        <Route path={`/${authedUser}`} component={Home}/>
					 	<Route path="/logout"  component={Logout}/>
						<Route path="/login" component={Login} />
						<Route path="/" component={Login} />						
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
