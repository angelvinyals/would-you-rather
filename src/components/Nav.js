import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';

export default function Nav({match}) {
	return (
		<div>
			<nav  className="nav-fill">
				<ul className= "nav-nav">				
					<NavLink  to={`${match.url}`}>Home</NavLink>
					<NavLink  to={`${match.url}/add`}>Add New poll</NavLink>
					<NavLink  to={`${match.url}/leaderboard`}>Leaderboard</NavLink>
					<NavLink  to={`/logout`}>Log out</NavLink>
				</ul>
			</nav>		
	        
	        
	    </div>
	)
}

const NavLink = (props) => (
  <li className ="nav-item">
    <Link {...props} style={{ color: 'inherit' }}/>
  </li>
)

let styles = {}

