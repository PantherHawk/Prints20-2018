import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectArtWork, selectArtist } from '../actions/index';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick';

class ArtWorksList extends Component {
	renderList() {
		return this.props.artists.map(artist => {
			return (
				<li
				key={artist.name}
				onClick={() => {
					this.props.selectArtWork(artist);
					this.props.selectArtist(artist);
					}
				}
				className="list-group-item"
				>{artist.name}</li>
			);
		});
	}

	render() {
		const {works} = this.props;
		var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
			onClick: function () {
				this.props.selectArtWork(artist);
				this.props.selectArtist(artist);
			}
    };
		return (
			<Slider {...settings}>

					{this.renderList()}

			</Slider>
		)
	}
}

function mapDispatchToProps(dispatch) {
	// Whenever selectArtWork is called, the result
	// should be passed to all our reducers
	// the dispatch function receives all the actions and
	// spits them out to all of the different reducers.
	return bindActionCreators({ selectArtWork: selectArtWork, selectArtist: selectArtist }, dispatch)
}
function mapStateToProps(state) {
	// Whatever is returned will show up as props
	// inside of ArtWorksList
	return {
		// the props we want to populate ArtWorksList with
		artists: state.artists,
	};
}


// Promote ArtWorkList from a component to a container - it needs
// to know about this new dispatch method, selectArtWork. Make it
// available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(ArtWorksList);
