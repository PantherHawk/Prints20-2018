import React, {Component} from 'react';

class Artists extends Component {
  constructor(props){
    super(props);
    this.state = {
      works: null
    },
    biography: ''
  }
  render() {
    return (
      <div className="artist-name">
        <h1>'Mikey Roarke'</h1>
      </div>
      <div className="works-in-collection">
        <div className="wic-label mb2">
            <strong className="upper">
              Works in collection
            </strong>
            <a to="/collection/">view all art by {selected.}</a>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selected: state.selectArtist
  }
}
