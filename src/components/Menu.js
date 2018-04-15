import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar'
import { slide as Menu } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
import styled from 'styled-components';

const styledMenu =  styled(reduxBurgerMenu(Menu))`
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 18px;
  text-decoration: none;
  color: #FFFFFF;
width: 5%;
height: 5%;
  position: absolute;
  left: 0px;
  right: 10px;
  top: 0px;
  bottom: 0px;

  background: #FF473A;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);

`
export default Menu;
