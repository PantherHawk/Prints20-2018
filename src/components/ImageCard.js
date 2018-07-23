import React, {Component} from 'react';
import {CloudinaryContext, Image, Transformation} from 'cloudinary-react';
import {CSSTransitionGroup} from 'react-transition-group';
import {hover, css} from 'glamor';
import {selectArtWork, hideArt} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import Lazyload from 'react-lazyload';
// import '../styles/ImageCard.css';
import styled from 'styled-components';

const imageContainerAfter = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  color: #FFF;
`

const hoverability = styled.div `

`

// var styles = {
//   overlay: {
//     position: 'absolute',
//     height: '600px',
//     width: '540px',
//     'z-index': '0',
//     'background-size': '100px',
//     opacity: '0.5',
//     transition: '.5s ease-in-out',
//     background: '#000'
//   },
//   overlayText: {
//     overlayText: {
//       'z-index': '1000',
//       color: '#2980b9',
//       'margin-top': '-50%',
//       'font-family': "Helvetica",
//       'font-weight': 'bold',
//       'font-size': '2.75em',
//       transition: '1s ease-out',
//       opacity: '0'
//     },
//     overlayImage: {
//       width: '100%',
//       height: '100%',
//       backgroundImage: `url(${url})`,
//       backgroundSize: 'cover',
//       transition: '0.5s ease-in-out'
//     }
//   }

// let overlay = css({
//   width: '100 %',
//   height: '100 %',
//   position: 'absolute',
//   opacity: '0',
//   background: '#000',
//   transition: 'opacity 200ms ease-in-out',
//    borderRadius: '4px',
//    margin: '-15px 0 0 -15px',
//   '&:hover': {
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//     backgroundColor: '#000',
//     opacity: '0.5'
//   }
// });

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    }
  }
  render() {
    // styles.overlay.opacity = '0';
    // styles.overlayText.opacity = '0';
    // let overlayStyles = styles.overlay;
    // let textStyles = styles.overlayText;
    // let overlayImageStyles = styles.overlayImage;
    let {item} = this.props;
    let {url} = item;
    let {hovered} = this.state;
    return (
    // hovered ?
    //
    // :
    <div className='grid-item resource' key={item.public_id} /*{...hovered && {...overlay}}*/
  // onMouseEnter={() => {
        // this.setState((prevState, props) => ({hovered: true}))
        // console.log('state changed to hovered')
      // }} onMouseLeave={() => {
        // this.setState((prevState, props) => ({hovered: false}))
        // console.log('hovered state turned off.')
      // }}
      onClick={() => {
        this.props.selectArtWork(item);
        this.props.hideArt(!this.state.hideArt);
      }}
      >

      <CloudinaryContext cloudName="prints20">
        <Image {...this.state.hideArt ? {...hideAway} : ''} publicId={item.public_id} width="100%"
          // style={{background: `url(${url})`}}

          // {...hovered && {...imgOverlay}}
        >
          {/* <div className="panel panel-default"> */}
          {/* <div className="panel-body"> */}

          {/* <div className="collection-grid-item "> */}

          {/* <span className="collection-grid-item__title h3"> */}
          {/* {item.title} */}
          {/* </span> */}
          {/* <span className="collection-grid-item__artist h6">
                        {item.artist}
                      </span> */
          }
          {/* <span className="btn btn-default btn-sm btn-outline btn-white">View Artwork</span> */}
          {/* </div> */}
          <Transformation width="150" crop="scale"/> {/* </div> */}
          {/* </div> */}
        </Image>
        <div id="overlay">
          <h5 className="img-title">{item.title && item.title}</h5>
          <p>{item.artist && item.artist}</p>
          <button
            onClick={(e) => console.log('item: ', item)}
            style={{content: "View Artwork"}} text="View Artwork" value="View Artwork"><p className="button-title">View Artwork</p></button>
        </div>

      </CloudinaryContext>
      {/* <span>{item.caption}</span> */}
    </div>)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectArtWork: selectArtWork,
    hideArt: hideArt
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(ImageCard);
