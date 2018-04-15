import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


let ArtForm = props => {
	const { handleSubmit } = props;
	return (
		<form onSubmit={handleSubmit}> {/*form body*/}
			<div>
				<Field name="artPiece" component="input" type="text" />
			</div>
			<button type="submit">Submit</button>
		</form>
	);
}

let createReduxForm = reduxForm({ form: 'art' })

ArtForm = createReduxForm(ArtForm);

export default ArtForm;

	
