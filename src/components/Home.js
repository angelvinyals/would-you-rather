import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
  Route, 
  Switch,
  Redirect 
} from "react-router-dom";
import QuestionsList from './QuestionsList'
import Poll from './Poll'
import Nav from './Nav'

import NewPoll from  './NewPoll'
import LeaderBoard from  './LeaderBoard'
import './Home.css';

class Home extends Component {	

    state = {       
      questionIdForPoll: '',      
    };

    
  	render() {

  		const { user, match} = this.props
    	const {showQuestionsList, questionIdForPoll,isQuestionAnswered,avatarURL}= this.state

      return (
    		<div className="home-title">
    			<h2>Would You Rather</h2>
    			<img 
				  	src={user.avatarURL} 
				  	alt="Avatar" 
				  	className='image-home'
				  	/>
		      <h5>Welcome,  {user.name}</h5>
          <Nav match={match}/>          
                    
          <Switch>
            <Route  path={`${match.url}/add`}  component={NewPoll}/>
            <Route  path={`${match.url}/leaderboard`}  component={LeaderBoard}/>            
            <Route  path={`${match.url}/questions/:questionId`} component={Poll}/> 
            <Route  path={`${match.url}/`} component={QuestionsList}/>             
          </Switch>
        </div> 
    	)
  	}
}

function mapStateToProps ({authedUser, questions, users}) {  
   
  const user = users[authedUser]

  return {
    authedUser,
    questionsArray:Object.values(questions),
    user: user

     
  };
}


export default connect(mapStateToProps)(Home);