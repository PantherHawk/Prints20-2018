import React, { Component } from 'react';
import ArtForm from './ArtForm';
import { CLOUDINARY_KEY, CLOUDINARY_SECRET } from '../../config.js';

export default class Admin extends Component {
  
	uploadWidget() {
		cloudinary.openUploadWidget({
			cloud_name: 'prints20',
			api_key: CLOUDINARY_KEY,
			api_secret: CLOUDINARY_SECRET,
			upload_preset: 'tdlphize',
			tags:[]
		}, function(result, error) {
			console.log('result: ', result);
		})
	}

	render() {
          return (
            <div>Hello World!
	        <ArtForm />
		<div className='upload'>
		  <button onClick={this.uploadWidget.bind(this)} className='upload-btn'>
		    Add Image
		  </button>
		</div>
	    </div>
      )
  }
}
