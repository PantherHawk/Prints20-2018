import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import FileInputForm from './FileImportForm';

let ArtForm = props => {
	const { handleSubmit } = props;
	return (
		<form onSubmit={handleSubmit}> {/*form body*/}
			<div>
				<label>Artist First Name</label>
				<div>

					<Field
						name="firstname"
						component="input"
						type="text"
						placeholder="e.g. Jay"
					/>
				</div>
			</div>
			<div>
				<label>Artist Last Name</label>
				<div>

					<Field
						name="lastname"
						component="input"
						type="text"
						placeholder="e.g. DeFeo"
					/>
				</div>
			</div>
			<div>
				<label>Title</label>
				<div>
					<Field
						name="title"
						component="input"
						type="text"
						placeholder="e.g. The Rose"
					/>
				</div>
			</div>
			<div>
				<label>Make</label>
				<div>

					<Field
						name="make"
						component="input"
						type="text"
						placeholder="e.g. oil on canvas"
					/>
				</div>
			</div>
						<button type="submit">Submit</button>
		</form>
	);
}

/*
artist
title
make
imageSrc
year
dateAcquired
price
history
date
 */

let createReduxForm = reduxForm({ form: 'art' })

ArtForm = createReduxForm(ArtForm);

export default ArtForm;
