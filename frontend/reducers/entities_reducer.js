import { combineReducers } from 'redux';
import users from './users_reducer';
import uploads from './uploads_reducer'

export default combineReducers({
  users,
  uploads
});
