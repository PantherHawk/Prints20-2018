import React, { Component } from 'react';
import ArtForm from './ArtForm';

export default class Admin extends Component {
  
	uploadWidget() {
		cloudinary.openUploadWidget({
			cloud_name: 'prints20',
			upload_preset: 'PRESET',
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
