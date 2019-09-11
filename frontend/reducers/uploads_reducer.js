import {RECEIVE_UPLOADS, RECEIVE_UPLOAD} from '../actions/upload_actions' 


const uploadsReducer = (state ={}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_UPLOADS:
            return action.uploads 
        case RECEIVE_UPLOAD:
            return Object.assign({}, state, {[action.upload.id]: action.upload})
        default:
            return state
    }
}

export default uploadsReducer;