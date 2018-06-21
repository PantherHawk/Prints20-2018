import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectArtWork, selectArtist } from '../actions/index';
import { fetchArt } from '../actions/artActions.js';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick';

class ArtWorksList extends Component {
	componentDidMount() {
		console.log('component did mount, mk')
		this.props.dispatch(fetchArt());
	}

	renderList() {
		return this.props.art.map(item => {
			return (
				<li
				key={item.name}
				onClick={() => {
					this.props.selectArtWork(item);
					this.props.selectArtist(item);
					}
				}
				className="list-group-item"
				>{item.name}</li>
			);
		});
	}

	render() {
		const { error, loading, art } = this.props;
		console.log('props ', this.props);
		if (error) {
			return <div>Whoops! {error.message}</div>;
		}
		if(loading) {
			return <div>Loading... </div>;
		}

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
	return bindActionCreators({ selectArtWork: selectArtWork, selectArtist: selectArtist, fetchArt: fetchArt }, dispatch)}
function mapStateToProps(state) {
	// Whatever is returned will show up as props
	// inside of ArtWorksList
	return {
		// the props we want to populate ArtWorksList with
		art: state.art,
		loading: state.loading,
		error: state.error
	};
}


// Promote ArtWorkList from a component to a container - it needs
// to know about this new dispatch method, selectArtWork. Make it
// available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(ArtWorksList);
