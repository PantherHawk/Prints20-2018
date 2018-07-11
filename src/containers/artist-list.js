import React, {Component} from 'react';
import {connect} from 'react-redux';
import ArtWorkDetail from '../containers/artwork-detail';
import Zoomer from '../components/Zoomer';
import {selectArtWork, selectArtist, hideArt} from '../actions/index';
import {fetchArt} from '../actions/artActions.js';
import {bindActionCreators} from 'redux';
import {CloudinaryContext, Image, Transformation} from 'cloudinary-react';
import StackGrid from 'react-stack-grid';
import GridItem from '../components/GridItem';
// import Slider from 'react-slick';
import _ from 'lodash';
// import faker from 'faker';
import {css} from 'glamor';

let collectionStage = css({
  display: 'hidden',
  paddingTop: '20px',
  paddingLeft: '10px',
  height: '100%',
  overflowX: 'scroll',
  overflowY: 'hidden',
  cursor: 'move'
})

let hideAway = css({
  visibility: 'hidden',
  opacity: '0',
  transition: 'visibility 0s 2s, opacity 2s linear'
})

class ArtWorksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideArt: false
    }
  }
  componentDidMount() {
    this.props.fetchArt();
  }
  renderItem(item) {
    console.log('fired renderItem: ', item)
    if (item.noArt) {
      return (<div key={item.noArt}><p class="h2">{item.noArt}</p></div> )
    }
    return (
        <div key={item.public_id} className='grid-item'>
          <CloudinaryContext cloudName="prints20">
            <Image {...this.state.hideArt ? {...hideAway} : ''}
               publicId={item.public_id}
               width="100%"
               onClick={() => {
              this.props.selectArtWork(item);
              this.props.hideArt(!this.state.hideArt);
              // this.setState((prevState, props) => ({
              //   hideArt: !prevState.hideArt
              // }));
            }} className={item.alt}>
            <Transformation width="150" crop="scale"/>
          </Image>
        </CloudinaryContext>
        <span>{item.caption}</span>
      </div>
    )
    this.setState((prevState, props) => ({
      hideArt: !prevState.hideArt
    }));
 }
 formatArt(obj) {
   let acc = [];
   for (var artist in obj) {
     acc = [...acc, ...obj[artist]]
   }
   if (acc.length < 1) {
     return [{ noArt: 'No pieces found.' }];
   }
   return acc;
 }

  render() {
    // console.log('renderlist output: ', this.renderList())
    const {error, items, loading, selected} = this.props;
    const art = this.formatArt(items);
    console.log('art: ', art)
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
        // this.props.hideArt(!this.state.artHidden)
        this.setState((prevState, props) => ({
          hideArt: !prevState.hideArt
        }));
        // this.props.selectArtist(artist);
      }
    };
    return selected ?
    (
      <Zoomer image={selected.url} />
    )
    : (
      <div {...collectionStage}>
        {/* <Slider {...settings}>

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
      </Slider> */}
      <StackGrid
        columnWidth={150}
        // gutterWidth={10}
        // gutterHeight={10}
        // monitorImagesLoaded={true}
        // horizontal={true}
        onAnimationEnd={
          () => this.setState((prevState, props) => ({
            hideArt: false
        }) )}
      >
        {this.state.hideArt ? '' : art.map(piece => {
          return this.renderItem(piece);
        })}
      </StackGrid>
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
    fetchArt: fetchArt,
    hideArt: hideArt
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
    selected: state.activeArtWork,
    artHidden: state.artHidden
  };
}

// Promote ArtWorkList from a component to a container - it needs
// to know about this new dispatch method, selectArtWork. Make it
// available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(ArtWorksList);
