import React, {Component} from 'react';
import {connect} from 'react-redux';
import ArtWorkDetail from '../containers/artwork-detail';
import Zoomer from '../components/Zoomer';
import {selectArtWork, selectArtist} from '../actions/index';
import {fetchArt} from '../actions/artActions.js';
import {bindActionCreators} from 'redux';
import {CloudinaryContext, Image, Transformation} from 'cloudinary-react';
import Slider from 'react-slick';
import _ from 'lodash'

class ArtWorksList extends Component {
  componentDidMount() {
    this.props.fetchArt();
  }
  renderList() {
    const {items} = this.props;
    return _.map(items, obj => {
      console.log('item object: ', obj)
      return (
        <div key={obj.public_id}>
          <Image publicId={obj.public_id} onClick={() => {
            this.props.selectArtWork(obj);
          }} className={obj.alt}>
          <Transformation width="200" crop="scale" angle="10"/>
        </Image>
        <span>{obj.caption}</span>
      </div>
      );
    })
  }
  initSeaDragon() {
    let viewer = OpenSeaDragon({
      id: "ocd",

    })
  }

  render() {
    const {error, items, loading, selected} = this.props;
    console.log('props ', this.props);
    if (error) {
      return <div>Whoops! {error.message}</div>;
    }
    if (loading || !items) {
      return <div>Loading...
      </div>;
    }

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      onClick: function(e) {
        console.log('e: ', e)
        this.props.selectArtWork(artist);
        // this.props.selectArtist(artist);
      }
    };
    return selected ?
    (
    // <ArtWorkDetail >
      <Zoomer image={selected.url} />
    // {/* <ArtWorkDetail /> */}
    )
    : (
      <CloudinaryContext cloudName="prints20">
        <Slider {...settings}>
          {this.renderList()}
        </Slider>
      </CloudinaryContext>
  )

  }
}

function mapDispatchToProps(dispatch) {
  // Whenever selectArtWork is called, the result
  // should be passed to all our reducers
  // the dispatch function receives all the actions and
  // spits them out to all of the different reducers.
  return bindActionCreators({
    selectArtWork: selectArtWork,
    fetchArt: fetchArt
  }, dispatch);
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of ArtWorksList
  return {
    // the props we want to populate ArtWorksList with
    items: state.art.items,
    loading: state.art.loading,
    error: state.art.error,
    selected: state.activeArtWork
  };
}

// Promote ArtWorkList from a component to a container - it needs
// to know about this new dispatch method, selectArtWork. Make it
// available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(ArtWorksList);
