import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/user';
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir, userIsAdminRedir,
         userIsAuthenticated, userIsNotAuthenticated } from '../auth';
import Admin from './Admin';
import LoginComponent from './Login';

const getUserName = usr => {
  if (usr.data) {
    return `Welcome ${usr.data.name}!`
  }
  return `Welcome to Prints20!`
}

// higher order components right here
const UserName = ({ usr }) => (<div>{getUserName(usr)}</div>);
const LoginLink = userIsNotAuthenticated(() => <NavLink to="/login">Login</NavLink>);
const LogoutLink = userIsAuthenticated(({ logout }) => <a href="#" onClick={() => logout()}>Logout</a>);

function App({usr, logout}) {
  return (
     <Router>
      <div>
        <nav>
          <NavLink exact to="/">Gallery</NavLink>
          <NavLink exact to="/admin">Admin</Navlink>
        </nav>
        <nav>
          <LoginLink />
          <LogoutLink logout={logout} />
          <UserName usr={usr} />
        </nav>
        <div className="routes">
          <Route exact path="/" component={Gallery}/>
          <Route path="/login" component={Login}/>
          <Route path="/admin" component={Admin}/>
        </div>
      </div>
     </Router>
  )
}

const mapStateToProps = state => ({
  usr: state.usr
});

export default connect(mapStateToProps, { logout })(App);
