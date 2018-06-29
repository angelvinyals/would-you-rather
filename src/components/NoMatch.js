import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import './NoMatch.css';


class NoMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigate: false
        }
    }

    componentDidMount(e) {
        return setTimeout(() => this.setState({ navigate: true }), 1500)      

    };

    render() {
        if (this.state.navigate) {        	      	
          	return <Redirect to="/" />
        }

        return (
          <div className="FourOhFour">
                <div className="bg" style={{backgroundColor: 'rgba(201, 76, 76, 0.3)'}}></div>
                <div className="code">404</div>
                <div>
                <h3>page not found</h3>
                <p>We are sorry but the page you are looking for does not exist.</p>
                </div>
            </div>
        );
    }
}

export default connect()(NoMatch);