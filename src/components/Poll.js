import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Poll.css';

class Poll extends Component {	 
    
    
  	render() {
  		
      const {id, question, avatarURLAuthor} =this.props   
  
    	return (
        <div className="poll-container">
        <h5>Would you rather?....</h5>
        <div className="row">
          <div className="column one">
            <h3>{question.optionOne.text}</h3>
          </div>
          <div className='poll-avatar'>
            <img 
            src={avatarURLAuthor} 
            alt="Avatar" 
            className='image-poll'
            />
          </div>
          <div className="column two" >
            <h3>{question.optionTwo.text}</h3>
          </div>
        </div>
    		
          
		    </div>
    	);
  	}
}

function mapStateToProps ({authedUser, questions, users},{id}) {  
  const question= questions[id]
  const author= questions[id].author
  return {
    authedUser,
    question: question,
    avatarURLAuthor: users[author].avatarURL
  };
}


export default connect(mapStateToProps)(Poll);