import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectArtWork } from '../actions/index';
import { bindActionCreators } from 'redux';

class ArtWorksList extends Component {
	renderList() {
		return this.props.artWorks.map(artWork => {
			return (
				<li
				key={artWork.title}
				onClick={() => this.props.selectArtWork(artWork)}
				className="list-group-item"
				>{artWork.title}</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapDispatchToProps(dispatch) {
	// Whenever selectArtWork is called, the result
	// should be passed to all our reducers
	// the dispatch function receives all the actions and
	// spits them out to all of the different reducers.
	return bindActionCreators({ selectArtWork: selectArtWork }, dispatch);
}
function mapStateToProps(state) {
	// Whatever is returned will show up as props
	// inside of ArtWorksList
	return {
		// the props we want to populate ArtWorksList with
		artWorks: state.artWorks
	};
}


// Promote ArtWorkList from a component to a container - it needs
// to know about this new dispatch method, selectArtWork. Make it
// available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(ArtWorksList);
