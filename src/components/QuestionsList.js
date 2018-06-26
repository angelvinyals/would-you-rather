import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

import './QuestionsList.css';

class QuestionsList extends Component {	
    
    state = { 
      answered: false,
      showQuestionsList: true,
    };
    
    handleToogle = (e) => {
       e.preventDefault()
      this.setState(prevState => ({
        answered: !prevState.answered
      }));
    }


  	render() {
  		const { YesAnsweredId, NotAnsweredId, questions, match} = this.props
      const {answered}= this.state
      const questionsList = answered ? YesAnsweredId : NotAnsweredId 
      console.log (questionsList)

      return (
    		<div className="questions-container">
          <h2>Questions List</h2>
          
    			<button
            onClick={this.handleToogle}
            className='button-answered'
          >
            {answered
              ? <h3>answered</h3>
              : <h3>NOT answered</h3>
            }
          </button> 

          <ul className='questions-list'>
            {questionsList.map( id=> 
                <li key={`q${id}`}>
                  <Link to={`${match.url}/${id}`}>
                    {questions[id].optionOne.text} / {questions[id].optionTwo.text}     
                  </Link>
                </li> 
              )
            }            
          </ul> 
           
            
		    </div>
    	);
  	}
}

function mapStateToProps ({authedUser, questions, users}) {  
  const questionsArray= Object.values(questions)
  const answeredId = Object.keys(users[authedUser].answers)
  return {
    questions,
    sortedQuestionsArray:questionsArray.sort((a, b) => b.timestamp - a.timestamp),
    YesAnsweredId: answeredId,
    NotAnsweredId: questionsArray.reduce((acc, q)=> {
                      acc= answeredId.some( a => a===q.id)
                          ? acc
                          : acc.concat(q.id)
                      return acc          
                    },[]) 

     
  };
}


export default connect(mapStateToProps)(QuestionsList);