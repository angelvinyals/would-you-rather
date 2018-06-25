import React, { Component } from 'react';
import { 
  Route, 
  Switch,
  NavLink,
  Redirect 
} from "react-router-dom";
import Home from  './Home'
import NewPoll from  './NewPoll'
import LeaderBoard from  './LeaderBoard'

export default function Nav() {
	return (
		<div>
		<nav classname='nav'>
			<ul>
				<li>
					<NavLink to='/' exact activeClassName='active'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/add' exact activeClassName='active'>
						Add New poll
					</NavLink>
				</li>
				<li>
					<NavLink to='/leaderboard' exact activeClassName='active'>
						Leaderboard
					</NavLink>
				</li>
			</ul>
		</nav>

		<Switch>
            <Route  exact path="/"  component={Home}/>
            <Route   path="/add"  component={NewPoll}/>
            <Route   path="/leaderboard"  component={LeaderBoard}/>

                   
          </Switch>
          </div>

	)
}