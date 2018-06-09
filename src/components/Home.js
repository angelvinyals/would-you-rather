import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionsList from './QuestionsList'
import Poll from './Poll'
import Logout from './Logout'
import NewPoll from  './NewPoll'
import './Home.css';

class Home extends Component {	

    state = { 
      showQuestionsList: true,
      questionIdForPoll: '',
      
    };

    toggleShowQuestionsList = (e, id,answered) => {

      e.preventDefault()


      this.setState(prevState => ({
        showQuestionsList: !prevState.showQuestionsList,
        questionIdForPoll: id,
        isQuestionAnswered:answered,
        
      }));
    }

  	render() {

  		const { user} = this.props
    	const {showQuestionsList, questionIdForPoll,isQuestionAnswered}= this.state

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
          <NewPoll user={user} />
          {showQuestionsList 
            ? <QuestionsList toggleShowQuestionsList={this.toggleShowQuestionsList}/>        
            : <Poll  id={questionIdForPoll} isAnswered={isQuestionAnswered} />   
		      }
        </div> 
    	)
  	}
}

function mapStateToProps ({authedUser, questions},{user}) {  

  return {
    authedUser,
    questionsArray:Object.values(questions),
    answers: user.answers

     
  };
}


export default connect(mapStateToProps)(Home);