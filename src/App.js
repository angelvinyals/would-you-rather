import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import Public from './components/public'
import Questions from './components/questions'
import './App.css';

class App extends Component {

  render() {
    let passingProps= {userName: 'oneName'}
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <AuthButton/>
              <ul>
                <li><Link to="/">Would you rather?</Link></li>
                <li><Link to="/questions">Questions Page</Link></li>
              </ul>
          </header>
              <Route path="/home" component={Public}/>
              <Route path="/login" component={Login}/>
              <PrivateRoute path='/questions' component={Questions}/>
        </div>
      </Router>
    );
  }
}

export default App;

export const fakeAuth = {
  users : {
    sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL: 'sarahedo.png',
      answers: {
        "8xf0y6ziyjabvozdd253nd": 'optionOne',
        "6ni6ok3ym7mf1p33lnez": 'optionOne',
        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
        "loxhs1bqm25b708cmbf3g": 'optionTwo'
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    tylermcginnis: {
      id: 'tylermcginnis',
      name: 'Tyler McGinnis',
      avatarURL: 'tylemcginnis.png' ,
      answers: {
        "vthrdm985a262al8qx3do": 'optionOne',
        "xj352vofupe1dqz9emx13r": 'optionTwo',
      },
      questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    johndoe: {
      id: 'johndoe',
      name: 'John Doe',
      avatarURL: 'jonhdoe.png' ,
      answers: {
        "xj352vofupe1dqz9emx13r": 'optionOne',
        "vthrdm985a262al8qx3do": 'optionTwo',
        "6ni6ok3ym7mf1p33lnez": 'optionOne'
      },
      questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    }
  },
  isAuthenticated: false,
  usernameLogged : '',
  authenticate(cb, username) {
    console.log(username)
    console.log(this.users.sarahedo.id)
    Object.entries(this.users).map(([key, value]) =>{
      console.log(key)
      if(username===key){
        this.isAuthenticated = true
        this.usernameLogged = key
        return
      } else {
        return
      }
    }/* do what you want */)
     // fake async
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}



//const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  handleSignIn =(e) =>{
    e.preventDefault()
    let username = this.refs.username.value
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      })
    }, username)

  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/ref' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <p>You must log in to view the page</p>
        <form onSubmit={this.handleSignIn}>
          <h3>Log in</h3>
          <input type="text" ref="username" placeholder="enter you username" />
          <input type="submit" value="Login" />
        </form>

      </div>
    )
  }
}

export function AuthExample () {
  return (
    <div>dsdfs</div>
  )
}


// Requirement 1. It has the same API as <Route />
// Requirement 2. It renders a <Route /> and passes all the props through to it.
// Requirement 3.
// It checks if the user is authenticated, if they are,
// it renders the "component" prop. If not, it redirects
// the user to route he is trying to visit.
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

// Because we pass our component to withRouter
// our component will be passed `history` as a prop.
const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome, {fakeAuth.usernameLogged}! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))
