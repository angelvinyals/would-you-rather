import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import './App.css';

class App extends Component {

	componentDidMount (){
		//console.log('...componetDidMount')
		this.props.dispatch(handleInitialData())
	}

  	render() {
  		//console.log('....app render')
    	return (
      		<div >
        		starter code 

      		</div>
    	);
  	}
}

export default connect()(App);
