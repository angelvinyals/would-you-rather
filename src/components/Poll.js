import React, { Component } from 'react';
import { connect } from 'react-redux'
import {AddvoteQuestionToUser} from  '../actions/users'

import './Poll.css';

class Poll extends Component {	 

    state = { 
      isAnsweredState: this.props.isAnswered,
      answer: this.props.answer
    };

    handleVoteOption = (option) => (e) =>{
      e.preventDefault()
      console.log(this.props.id, option)
      this.props.dispatch(
        AddvoteQuestionToUser ({
          authedUser:this.props.authedUser,
          qid:this.props.id,
          answer:option
        })
      )
      this.setState({
        isAnsweredState:true,
        answer:this.props.option
      })
    }
    
  	render() {
  		
      const {id, question, avatarURLAuthor,isAnswered,answer,votesOptionOne, votesOptionTwo, percentatgeOptionOne, percentatgeOptionTwo} =this.props 
      const {isAnsweredState} = this.state  
      console.log(answer)
    	return (
        <div>
          {isAnsweredState ? (
              <div className="poll-container">
                <h5>These are the data for this poll</h5>
                <div className="row">
                  <div className={answer==="optionOne"? 'column select' :"column"}>
                    <h4>{question.optionOne.text}</h4>
                    <p>voted by</p>
                    <h3>{votesOptionOne} persons</h3>
                    <h1>{percentatgeOptionOne}%</h1>
                  </div>
                  <div className='poll-avatar'>
                    <img 
                    src={avatarURLAuthor} 
                    alt="Avatar" 
                    className='image-poll'
                    />
                  </div>
                  <div className={answer==="optionTwo"? "column select" :"column"}>
                    <h4>{question.optionTwo.text}</h4>
                    <p>voted by</p>
                    <h3>{votesOptionTwo} persons</h3>
                    <h1>{percentatgeOptionTwo}%</h1>
                  </div>
                </div>
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

function mapStateToProps ({authedUser, questions, users},{id,isAnswered}) {  
  const question= questions[id]
  const author= questions[id].author
  const answersIdArray= Object.keys(users[authedUser].answers)
  return {
    authedUser,
    question: question,
    avatarURLAuthor: users[author].avatarURL,
    answer: answersIdArray.some(answId => id===answId) ? users[author].answers[id] : '',
    votesOptionOne: question.optionOne['votes'].length,
    votesOptionTwo: question.optionTwo['votes'].length,
    percentatgeOptionOne: parseInt(question.optionOne['votes'].length)/(parseInt(question.optionOne['votes'].length)+parseInt(question.optionTwo['votes'].length))*100,
    percentatgeOptionTwo: parseInt(question.optionTwo['votes'].length)/(parseInt(question.optionOne['votes'].length)+parseInt(question.optionTwo['votes'].length))*100


  };
}


export default connect(mapStateToProps)(Poll);