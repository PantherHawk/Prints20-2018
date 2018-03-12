import React, { Component } from 'react';
import ArtWorksList from '../containers/artist-list';
import ArtWorkDetail from '../containers/artwork-detail';

export default class Gallery extends Component {
  render() {
    return (
      <div>
      	<ArtWorksList/>
      	<ArtWorkDetail/>
      </div>
    );
  }
}
