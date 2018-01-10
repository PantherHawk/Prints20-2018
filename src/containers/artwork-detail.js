import React, { Component } from 'react';
import { connect } from 'react-redux';


class ArtWorkDetail {
	render() {
		if (!this.props.artWork) {
			return <div>Select a book to get started!</div>
		}
		return (
			<div>
				<h3>Details for:</h3>
				<div>Title: {this.props.artWork.title}</div>
				<div> By: {this.props.artWork.artist}</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		artWork: state.activeArtWork
	}
}

export default connect(mapStateToProps)(ArtWorkDetail)