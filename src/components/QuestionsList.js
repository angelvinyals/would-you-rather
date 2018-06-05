import React, { Component } from 'react';
import { connect } from 'react-redux'
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
  		const { YesAnsweredId, NotAnsweredId, questions , toggleShowQuestionsList} = this.props
      const {answered}= this.state
     

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
          {this.state.answered
            ? <div>              
                <ul className='questions-list'>
                  {YesAnsweredId.map( r=> 
                      <li key={`answ${r}`}>
                        <div  onClick={(e)=>toggleShowQuestionsList(e,r)} className="div-button">
                          {questions[r].optionOne.text} / {questions[r].optionTwo.text}                            
                          <hr />
                        </div>
                      </li> 
                    )
                  }            
                </ul>
              </div>
            
            :(
              <div>              
                <ul className='questions-list'>
                  {NotAnsweredId.map( r=> 
                      <li key={`NOTansw${r}`}>
                        <div onClick={(e)=>toggleShowQuestionsList(e,r)} className="div-button">
                          {questions[r].optionOne.text} / {questions[r].optionTwo.text}                           
                          <hr />
                        </div>
                      </li> 
                    )
                  }            
                </ul>               
              </div>
            )        
          }          
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
                      answeredId.some( a => a===q.id)
                          ? null
                          : acc.push(q.id)
                      return acc          
                    },[]) 

     
  };
}


export default connect(mapStateToProps)(QuestionsList);