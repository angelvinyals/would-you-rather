import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionsList from './QuestionsList'
import Poll from './Poll'
import Logout from './Logout'
import './Home.css';

class Home extends Component {	

    state = { 
      showQuestionsList: true,
      questionIdForPoll: ''
    };

    toggleShowQuestionsList = (e, id) => {
      e.preventDefault()
      console.log(id)
      this.setState(prevState => ({
        showQuestionsList: !prevState.showQuestionsList,
        questionIdForPoll: id
      }));
    }

  	render() {

  		const {authedUser, usersArray, usersId, user} = this.props
    	const {showQuestionsList, questionIdForPoll}= this.state

      return (
    		<div className="home-title">
    			<h2>Would You Rather</h2>
    			<img 
				  	src={user.avatarURL} 
				  	alt="Avatar" 
				  	className='image-home'
				  	/>
		      <h5>Welcome,  {user.name}</h5>
		      <Logout />
          {showQuestionsList 
            ? <QuestionsList toggleShowQuestionsList={this.toggleShowQuestionsList}/>        
            : <Poll id={questionIdForPoll}/>   
		      }
        </div>
    	)
  	}
}

function mapStateToProps ({authedUser, questions}) {  

  return {
    authedUser,
    questionsArray:Object.values(questions),
     
  };
}


export default connect(mapStateToProps)(Home);