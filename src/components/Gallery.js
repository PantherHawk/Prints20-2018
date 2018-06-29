import React, { Component } from 'react';
import Search from '../containers/SearchBar';
import ArtWorksList from '../containers/artist-list';
// import ArtWorkDetail from '../containers/artwork-detail';
import Menu from './Menu'

export default class Gallery extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <Search />
      	<ArtWorksList/>
      	{/* <ArtWorkDetail/>*/}
      </div>
    );
  }
}
