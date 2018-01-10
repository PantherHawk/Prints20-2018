import { combineReducers } from 'redux';
import ArtWorksReducer from './reducer_artWorks';
import ActiveArtWork from './reducer_active_artwork';

const rootReducer = combineReducers({
  artWorks: ArtWorksReducer,
  activeArtWork: ActiveArtWork
});

export default rootReducer;
