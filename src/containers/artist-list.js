import React, {Component} from 'react';
import {connect} from 'react-redux';
import ArtWorkDetail from '../containers/artwork-detail';
import Zoomer from '../components/Zoomer';
import {selectArtWork, selectArtist} from '../actions/index';
import {fetchArt} from '../actions/artActions.js';
import {bindActionCreators} from 'redux';
import {CloudinaryContext, Image, Transformation} from 'cloudinary-react';
import Slider from 'react-slick';
import _ from 'lodash';
import faker from 'faker';

class ArtWorksList extends Component {
  componentDidMount() {
    this.props.fetchArt();
  }
  renderItem(item) {
    const {items} = this.props;
    let erroneousThing = '';
    return (
        <div key={item.public_id} className='grid-item'>
          <CloudinaryContext cloudName="prints20">
            <Image publicId={item.public_id} onClick={() => {
              this.props.selectArtWork(item);
            }} className={item.alt}>
            <Transformation width="200" crop="scale"/>
          </Image>
        </CloudinaryContext>
        <span>{item.caption}</span>
      </div>
    )
 }

  initSeaDragon() {
    let viewer = OpenSeaDragon({
      id: "ocd",

    })
  }

  render() {
    // console.log('renderlist output: ', this.renderList())
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
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,

      onClick: function(e) {
        console.log('e: ', e)
        this.props.selectArtWork(artist);
        // this.props.selectArtist(artist);
      }
    };
    return selected ?
    (
      <Zoomer image={selected.url} />
    )
    : (
      <div className="posts-rows">
        <Slider {...settings}>

          {
            items.slice(0, Math.floor((items.length - 1)/2)).map((item, i) => {
              return this.renderItem(item)
            })
          }

        </Slider>
        <Slider {...settings}>
        {
          items.slice(Math.floor((items.length - 1)/2) + 1).map((item, i) => {
            return this.renderItem(item)
          })
        }
      </Slider>
    </div>
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
