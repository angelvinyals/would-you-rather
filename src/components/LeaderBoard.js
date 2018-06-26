import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LeaderBoard.css';

class LeaderBoard extends Component {	
 
	render() {

		return (
  		<div className="LeaderBoard-title">
  			<h2>LeaderBoard</h2>	    
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