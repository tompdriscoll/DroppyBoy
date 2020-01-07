import * as APIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => {
  return ({
  type: RECEIVE_CURRENT_USER,
  currentUser})
};


export const requestUpdateUser = user => dispatch => (
    APIUtil.editUser(user).then(user => {
        console.log(user)
        dispatch(receiveCurrentUser(user))
    })
)