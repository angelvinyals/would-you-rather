import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestion } from  '../actions/shared'

import './NewPoll.css';

class LeaderBoard extends Component {	

  state = {      
    optionOneText:'',
    optionTwoText:'',
  };

  /*
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
  */

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {   
    event.preventDefault();

    const {dispatch, authedUser }= this.props
    const { optionOneText, optionTwoText} = this.state   
    
    dispatch(handleSaveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    }))

    this.setState({
        optionOneText:'',
        optionTwoText:'',
      })
  }
 
	render() {

		return (
  		<div className="newpoll-title">
  			<h2>Add a New Poll</h2>
  			<form onSubmit={this.handleSubmit}>
          <label>
            option One
            <input 
              name="optionOneText"
              type="text"
              value={this.state.optionOneText}
              onChange={this.handleInputChange} />
          </label>
          <label>
            option Two
            <input 
              name="optionTwoText"
              type="text"
              value={this.state.optionTwoText}
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
	      
	    
      </div> 
  	)
	}
}

function mapStateToProps ({authedUser, users},{user}) {  
  
  return {
    authedUser,
    user,
  };
}


export default connect(mapStateToProps)(LeaderBoard);