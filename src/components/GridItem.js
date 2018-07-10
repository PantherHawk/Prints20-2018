import React from 'react';
import {CloudinaryContext, Image, Transformation} from 'cloudinary-react';

const GridItem = (props) => {
  console.log('props in GridItem: ', props)
  return (
    <div key={piece.public_id} className='grid-item'>
      <CloudinaryContext cloudName="prints20">
        <Image publicId={piece.public_id} onClick={() => {
          this.props.selectArtWork(piece);
        }} className={piece.alt}>
        <Transformation height="200" crop="scale"/>
      </Image>
    </CloudinaryContext>
    <span>{piece.caption}</span>
  </div>
)}

export default GridItem;
