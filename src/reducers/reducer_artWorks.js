import {
	FETCH_ART_BEGIN,
	FETCH_ART_SUCCESS,
	FETCH_ART_FAIL
} from '../actions/artActions.js'

const initialState =	[	
		{name: 'Pablo Picasso', pieces: [
				{title: 'Portrait of Gertrude Stein', img: "http://bit.ly/2o9Zx0m"}
			]},
		{name: 'Jay DeFeo', pieces: [
			{title: 'The Rose', img: "http://bit.ly/2ocPA2m"},
			{title: 'Sylvette', img: "http://bit.ly/2C59kOC"},
			{title: 'The Veronica', img: "http://bit.ly/2o2QbEj"},
			{title: 'The Jewel', img: "http://bit.ly/2ErwLPH"},
		]}
	];

export default function artWorksReducer(state = initialState, action) {
	switch(action.type) {
		case FETCH_ART_BEGIN:
			return {
				...state,
				loading: true,
				error: null
			};
		case FETCH_ART_SUCCESS:
			return {
				...state,
				loading: false,
				items: action.payload.art
			};
		case FETCH_ART_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				items: []
			};
		default:
			return state;
	}
}

