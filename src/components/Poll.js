import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/shared'

import './Poll.css';

class Poll extends Component {	 

    state = { 
      isAnsweredState: false,
     
    };

    handleVoteOption = (answer) => (e) =>{
      e.preventDefault()

      const {dispatch, authedUser, id  }= this.props
      console.log( authedUser, id, answer)

      dispatch(handleSaveAnswer({
        qid:id,
        authedUser,
        answer,
      }))
      
      this.setState({
        isAnsweredState:true,
        answer,
      })
      
    }
    
  	render() {
  		
      const {question, avatarURLAuthor } =this.props 
      const {isAnsweredState} = this.state       

      
    	return (
        <div>
          {isAnsweredState ? (
              <div className="poll-container">
                <h5>These are the data for this poll</h5>
                
              </div>
            ):(
              <div className="poll-container">
                <h5>Would you rather?....</h5>
                <div className="row">
                  <div className="column one" onClick={this.handleVoteOption('optionOne')} >
                    <h3>{question.optionOne.text}</h3>
                  </div>
                  <div className='poll-avatar'>
                    <img 
                    src={avatarURLAuthor} 
                    alt="Avatar" 
                    className='image-poll'
                    />
                  </div>
                  <div className="column two" onClick={this.handleVoteOption('optionTwo')}>
                    <h3>{question.optionTwo.text}</h3>
                  </div>
                </div>
                <p>please, select one and only one answer</p>          
              </div>
            )
          }
        </div>
    	);
  	}
}

function mapStateToProps ({authedUser, questions, users},{match}) {  
  const question= questions[match.params.questionId]
  const author= question.author
  
  return {   
    questions: questions,
    question: question,
    avatarURLAuthor: users[author].avatarURL,
    isAnsweredState: Object.keys(users[authedUser].answers).find(match.params.questionId) 
                      ? true
                      : false,
  
  };
}


export default connect(mapStateToProps)(Poll);