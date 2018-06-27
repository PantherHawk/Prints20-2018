import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findArt } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(e) {
    console.log('event object: ', e.target.value);
    this.setState({ term: e.target.value });
  }
  onSearchSubmit(e) {
    e.preventDefault();
    // hit the backend with the action creator
    this.props.findArt(this.state.term);
    this.setState({ term: '' });
  }
  render() {
    return (
      <form onSubmit={e => this.onSearchSubmit(e)} className="input-group">
        <input
          placeholder="what sort of art are you interested in?"
          className="form-control"
          value={this.state.term}
          onChange={e => this.onInputChange(e)}
          >
        </input>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ findArt }, dispatch);
}

// function mapStateToProps({works}) {
//   // TODO: fill props with state
// }


export default connect(null, mapDispatchToProps)(SearchBar);
