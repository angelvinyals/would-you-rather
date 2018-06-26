import React, { Component } from 'react';
import { 
  Route, 
  Switch,
  Link,
  Redirect 
} from "react-router-dom";
import Home from  './Home'
import Logout from  './Logout'
import NewPoll from  './NewPoll'
import LeaderBoard from  './LeaderBoard'

export default function Nav({match}) {
	return (
		<div>
			<nav  style={styles.fill}>
				<ul style={styles.nav}>				
					<NavLink exact to={`${match.url}/`}>Home</NavLink>
					<NavLink exact to={`${match.url}/add`}>Add New poll</NavLink>
					<NavLink exact to={`${match.url}/leaderboard`}>Leaderboard</NavLink>
					<NavLink exact to={`${match.url}/logout`}>Log out</NavLink>
				</ul>
			</nav>		
	        <Route  exact path="/"  component={Home}/>
	        
	    </div>
	)
}

const NavLink = (props) => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: 'inherit' }}/>
  </li>
)

let styles = {}



styles.nav = {
  padding: 0,
  margin: 0,
  
  height: '40px',
  width: '100%',
  display: 'flex'
}

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
}

