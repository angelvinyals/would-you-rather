import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Home.css';

class QuestionsList extends Component {	

  	render() {
  		const {authedUser} = this.props
    	return (
    		<div className="home-title">
    			question list on progress
		    </div>
    	);
  	}
}

function mapStateToProps ({authedUser, questions}) {  

  return {
    authedUser,
    questionsArray:Object.values(questions),
     
  };
}


export default connect(mapStateToProps)(QuestionsList);