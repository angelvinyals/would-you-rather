import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
  Route,
  Switch,
  Redirect 
} from "react-router-dom";
import Poll from './Poll'
import QuestionsList from './QuestionsList'
import Nav from './Nav'
import NewPoll from  './NewPoll'
import LeaderBoard from  './LeaderBoard'
import Logout from './Logout'
import './Home.css';

class UserHome extends Component {	
    
  	render() {

  		const { user, match, authedUser} = this.props
       console.log('Home render...')

      return (
    		<div className="home-title">
    			<h2>Would You Rather</h2>
    			<img 
				  	src={user.avatarURL} 
				  	alt="Avatar" 
				  	className='image-home'
				  	/>
		      <h5>Welcome,  {user.name}</h5>
                   
                    
          <Switch>    
            <Route  path={`/${authedUser}/questions/:questionId`} component={Poll}/>                
            <Route  path={`/${authedUser}/questions`} component={QuestionsList}/>
            <Route  path={`/${authedUser}/add`} component={NewPoll}/>     
            <Route  path={`/${authedUser}/LeaderBoard`} component={LeaderBoard}/> 
            <Route  path={`/${authedUser}/logout`}  component={Logout}/>  
            <Redirect to="/404" />             
          </Switch>
        </div> 
    	)
  	}
}

function mapStateToProps ({authedUser, questions, users}) {  
  
  return {
    authedUser,
    user: users[authedUser]     
  };
}

export default connect(mapStateToProps)(UserHome);