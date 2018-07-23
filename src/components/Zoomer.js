import React, {Component} from 'react';
import ViewerDetails from './ViewerDetails';
import FontAwesome from 'react-fontawesome';
import openSeadragon from 'openseadragon';

// helper function to load image using promises
const loadImage = (src) => new Promise(function(resolve, reject) {
  var img = document.createElement('img')
  img.addEventListener('load', function() {
    resolve(img)
  })
  img.addEventListener('error', function(err) {
    reject(404)
  })
  img.src = src;
});

class Zoomer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    }
  }
  componentDidMount() {
    console.log('mounted')
    console.log('img: ', document.querySelector('img'))
    this.initSeaDragon();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }
  toggleHidden() {
    this.setState((prevState) => ({isHidden: !prevState.isHidden}));
  }

  initSeaDragon() {
    let {id, image, type} = this.props;
    loadImage(image).then(data => {
      this.Viewer = openSeadragon({
        id: id,
        debugMode: true,
        prefixUrl: '../../node_modules/openseadragon/build/openseadragon/images/',
        tileSources: {
          type: 'legacy-image-pyramid',
          levels: [
          {
            url: image,
            height: 1512,
            width: 1512
          }
        ],}
      })

    });
  }

  render() {
    // let self = this;
    let {id} = this.props;
    return (
      <div className="viewer-container">
        <div id={id} className="openseadragon-canvas"></div>
        <a style={{zIndex: -1, position: 'relative'}}><div className="viewer-bottom-controls" style={{position: 'fixed'}}><button className="btn viewer-detail-display" data-toggle="collapse" onClick={() => this.toggleHidden()}><span className="closed-text">{this.state.isHidden ? (<span><FontAwesome name="plus" size="2x" />Show</span>) : (<span><FontAwesome name="minus" size="2x" />Hide</span>)} Details</span></button></div></a>
        <div className="viewer-overlay collapse">
          {!this.state.isHidden && <ViewerDetails />}
        </div>
      </div>
    )
  }
}

Zoomer.defaultProps = {
  id: 'open-sea-dragon',
  type: 'legacy-image-pyramid'
}

export default Zoomer;
