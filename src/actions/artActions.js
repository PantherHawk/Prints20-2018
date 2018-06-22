import { CLOUDINARY_KEY, CLOUDINARY_SECRET } from '../../config.js';

export const FETCH_ART_BEGIN = 'FETCH_ART_BEGIN';
export const FETCH_ART_SUCCESS = 'FETCH_ART_SUCCESS';
export const FETCH_ART_FAIL = 'FETCH_ART_FAIL';

export function fetchArtBegin() {
	return {
		type: FETCH_ART_BEGIN
	};
}

export const fetchArtSuccess = art => ({
	type: FETCH_ART_SUCCESS,
	payload: { art }
});

export const fetchArtFail = error => ({
	type: FETCH_ART_FAIL,
	payload: { error }
});

export function fetchArt() {
	return dispatch => {
		console.log('fetching art from cloudinary...');
		return fetch(`https://${CLOUDINARY_KEY}:${CLOUDINARY_SECRET}@api.cloudinary.com/v1_1/prints20/resources/image`)
			.then(response => response.json())
			.then(json => dispatch(fetchArtSuccess(json)));
	}
}

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	} 
	return response;
}
