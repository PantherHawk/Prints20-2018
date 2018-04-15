import React, { Component } from 'react';
import ArtWorksList from '../containers/artist-list';
import ArtWorkDetail from '../containers/artwork-detail';
import Menu from './Menu'

export default class Gallery extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
      	<ArtWorksList/>
      	<ArtWorkDetail/>
      </div>
    );
  }
}
