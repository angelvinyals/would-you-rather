import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  Redirect 
} from "react-router-dom";
import './QuestionsList.css';

class QuestionsList extends Component {	
    
    state = { 
      answered: false 
    };
    
    handleToogle = (e) => {
       e.preventDefault()
      this.setState(prevState => ({
        answered: !prevState.answered
      }));
    }

      
  	render() {
  		const { YesAnsweredId, NotAnsweredId, questions , toggleShowQuestionsList, match} = this.props
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

          <Redirect push to={`${match.url}/${answered}`}/> 

          <Route               
            path={`${match.url}/${answered}`}
            render={({ match }) =>           
              <div>              
                <ul className='questions-list'>
                  {questionsList.map( r=> 
                      <li key={`answ${r}`}>
                        <div  onClick={(e)=>toggleShowQuestionsList(e,r,this.state.answered)} className="div-button">
                          {questions[r].optionOne.text} / {questions[r].optionTwo.text}                            
                          <hr />
                        </div>
                      </li> 
                    )
                  }            
                </ul>
              </div> 
            }
          />
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