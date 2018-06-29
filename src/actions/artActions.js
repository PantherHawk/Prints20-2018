export const FETCH_ART_BEGIN = 'FETCH_ART_BEGIN';
export const FETCH_ART_SUCCESS = 'FETCH_ART_SUCCESS';
export const FETCH_ART_FAIL = 'FETCH_ART_FAIL';
export const FETCH_ART = 'FETCH_ART';

export async function fetchArt() {
	console.log('beginning art fetch')
	fetchArtBegin();
	let response = await fetch('/api/images');
	let data = await response.json();
	let art = data.resources;
	console.log('data returned to fetchArt: ', art);
	// format data [{piece: id, context: {custom: {artist: name}}}}, {piece: id, custom: {artist: name}}] ---> {artistName: [pieces]}
	_.forIn(art, (datum) => {
		if (datum.context) {
			_.merge(datum, datum.context.custom)
			delete datum.context;
			console.log('after merge: ', datum)
		}
	})
	return fetchArtSuccess(data.resources);
}

export async function putArt(art) {
	// let art[art.public_id]
}
export function fetchArtBegin() {
	return {
		type: FETCH_ART_BEGIN
	};
}

export const fetchArtSuccess = art => ({
	type: FETCH_ART_SUCCESS,
	payload: art
});

export const fetchArtFail = error => ({
	type: FETCH_ART_FAIL,
	payload: { error }
});



function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}
