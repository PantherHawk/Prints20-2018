import { CLOUDINARY_KEY, CLOUDINARY_SECRET } from '../../config.js';

export const FETCH_ART_BEGIN = 'FETCH_ART_BEGIN';
export const FETCH_ART_SUCCESS = 'FETCH_ART_SUCCESS';
export const FETCH_ART_FAIL = 'FETCH_ART_FAIL';

export const fetchArtBegin = () => ({
	type: FETCH_ART_BEGIN
});

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
		dispatch(fetchArtBegin());
		console.log('fetching art from cloudinary...');
		return fetch(`https://${CLOUDINARY_KEY}:${CLOUDINARY_SECRET}@api.cloudinary.com/v1_1/prints20/resources/image`)
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				console.log('in fetchArt: ', json);
				dispatch(fetchArtSuccess(json.art));
				return json.art;
			})
			.catch(error => dispatch(fetchArtFail(error)));
	};
}

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	} 
	return response;
}
