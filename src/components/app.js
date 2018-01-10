import React, { Component } from 'react';
import ArtWorksList from '../containers/artworks-list';
import ArtWorkDetail from '../containers/artwork-detail';

export default class App extends Component {
  render() {
    return (
      <div>
      	<ArtWorksList/>
      	<ArtWorkDetail/>
      </div>
    );
  }
}
