import React, {Component} from 'react';
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
  }
  componentDidMount() {
    console.log('mounted')
    console.log('img: ', document.querySelector('img'))
    this.initSeaDragon();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false
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
    return ( <div id={id} style={{width: "800px", height: "600px"}}></div>)
  }
}

Zoomer.defaultProps = {
  id: 'open-sea-dragon',
  type: 'legacy-image-pyramid'
}

export default Zoomer;
