import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Admin from './Admin';
import Gallery from './Gallery';
import Menu from './Menu';
import Collections from './Collections'
import Zoomer from './Zoomer';
import styled from 'styled-components';

const MenuItem = styled.a`
  display: block;
  outline: none;
  text-align: center;
  text-decoration: none;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 18px;
  color: #FFFFFF;
`
const MenuItemLabel = styled.span`
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 18px;
  color: #FFFFFF;
`
var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '2%',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmMenuWrap: {
    bottom: '0',
  left: '0'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
    return (
      <Router>
        <div>
          <Menu  styles={ styles } >
            <MenuItem href="/"><MenuItemLabel >Gallery</MenuItemLabel></MenuItem>
            <MenuItem href="/admin"><MenuItemLabel >Admin</MenuItemLabel></MenuItem>
            <MenuItem href="/collections"><MenuItemLabel>Collections</MenuItemLabel></MenuItem>
          </Menu>
          {/* <nav>
            <LoginLink />
            <LogoutLink logout={logout} />
            <UserName />
          </nav> */}
          <div className="routes">
            <Route exact path="/collection" component={Gallery}/>
            <Route path="/collections" component={Collections}/>
            <Route path="/viewer" component={Zoomer} />
            <Route path="/admin" component={Admin}/>
          </div>
        </div>
      </Router>
    )
	}
}

export default App;
