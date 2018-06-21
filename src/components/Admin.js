import React, { Component } from 'react';
import ArtForm from './ArtForm';

export default class Admin extends Component {
  
	uploadWidget() {
		cloudinary.openUploadWidget({
			cloudname: 'CLOUD_NAME',
			upload_preset: 'PRESET',
			tags:[]
		})
		.then(result => console.log('result: ', result))
		.catch(error => console.log('error: ', error))
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
