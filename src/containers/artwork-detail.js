import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

class ArtWorkDetail extends Component {
	renderPieces() {
		return this.props.activeArtWork.map(piece => {
			return <div
				key={piece.title}>
				{piece.title}
				<img src={piece.img ? piece.img : 'Loading ...'} style={{maxWidth: '20em', minWidth: '20em'}} />
				</div>
		});
	}
	render() {
		var settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			lazyLoad: true,
			centerMode: false,
			adaptiveHeight: true,
		}
		console.log('this.props', this.props)
		if (!this.props.activeArtWork) {
			return <div>Select a piece to get started!</div>
		}
		return (
			<div>
				<h3>Art by {this.props.activeArtist}</h3>
				<div>Title: {this.props.activeArtWork.name}</div>
				<Slider {...settings}>
				{this.renderPieces()}
				</Slider>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		activeArtWork: state.activeArtWork,
		activeArtist: state.activeArtist
	}
}

export default connect(mapStateToProps)(ArtWorkDetail)
