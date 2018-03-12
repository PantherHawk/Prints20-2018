import { combineReducers } from 'redux';
import ArtistReducer from './reducer_artWorks';
import ActiveArtWork from './reducer_active_artwork';
import ActiveArtist from './reducer_active_artist';

const rootReducer = combineReducers({
  artists: ArtistReducer,
  activeArtWork: ActiveArtWork,
  activeArtist: ActiveArtist
});

export default rootReducer;
