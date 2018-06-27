export const FETCH_ART_BEGIN = 'FETCH_ART_BEGIN';
export const FETCH_ART_SUCCESS = 'FETCH_ART_SUCCESS';
export const FETCH_ART_FAIL = 'FETCH_ART_FAIL';
export const FETCH_ART = 'FETCH_ART';

export async function fetchArt() {

	let response = await fetch('/api/images');
	let data = await response.json();

	console.log('data: ', data)

	return {
		type: FETCH_ART,
		payload: data.resources
	};
}

export async function putArt(art) {
	// let art[art.public_id]
}
// export function fetchArtBegin() {
// 	return {
// 		type: FETCH_ART_BEGIN
// 	};
// }
//
// export const fetchArtSuccess = art => ({
// 	type: FETCH_ART_SUCCESS,
// 	payload: { art }
// });

// export const fetchArtFail = error => ({
// 	type: FETCH_ART_FAIL,
// 	payload: { error }
// });



// function handleErrors(response) {
// 	if (!response.ok) {
// 		throw Error(response.statusText);
// 	}
// 	return response;
// }
