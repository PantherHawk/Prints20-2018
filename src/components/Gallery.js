import React, { Component } from 'react';
import Search from '../containers/SearchBar';
import ArtWorksList from '../containers/artist-list';
// import ArtWorkDetail from '../containers/artwork-detail';
import Menu from './Menu'
import Footer from '../containers/Footer';

export default class Gallery extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <Search />
        <div className="wrapper">
          <ArtWorksList/>
          <div className="push"></div>
        </div>
      	{/* <ArtWorkDetail/>*/}
        <Footer className="footer" />
      </div>
    );
  }
}
