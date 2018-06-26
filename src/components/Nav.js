import React from 'react';
import { Link } from "react-router-dom";

export default function Nav({match}) {
	return (
		<div>
			<nav  style={styles.fill}>
				<ul style={styles.nav}>				
					<NavLink  to={`${match.url}/questions`}>Home</NavLink>
					<NavLink  to={`${match.url}/add`}>Add New poll</NavLink>
					<NavLink  to={`${match.url}/leaderboard`}>Leaderboard</NavLink>
					<NavLink  to={`/logout`}>Log out</NavLink>
				</ul>
			</nav>		
	        
	        
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

