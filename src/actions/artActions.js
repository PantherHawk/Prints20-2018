import { CLOUDINARY_KEY, CLOUDINARY_SECRET } from '../../config.js';
import axios from 'axios';
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
	//const url = 'https://'+CLOUDINARY_KEY+':'+CLOUDINARY_SECRET +'@api.cloudinary.com/v1_1/prints20/resources/image';
	// const uri = 'https://api.cloudinary.com/v1_1/prints20/resources/image'
	// const request = fetch('http://res.cloudinary.com/prints20/image/upload/v1529603041/12377617_941057135965309_1982003242681646859_o_vjt9hx.jpg', {
  // 	method: 'get',
  // 	headers: {
  //   	'Authorization': 'Basic ' + btoa(CLOUDINARY_KEY + ":" + CLOUDINARY_SECRET),
  // 	},
	// }).then(res => res.json());
	const request = axios.get('http://localhost:8080/api/images').then(response => console.log('response: ', response)).catch(err => console.log('Fetch Error: ', err));
	return {
		type: FETCH_ART_SUCCESS,
		payload: request
	}

}

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}
