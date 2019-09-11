import * as APIUtil from '../util/upload_api_util';

export const RECEIVE_UPLOADS = 'RECEIVE_UPLOADS';
export const RECEIVE_UPLOAD = 'RECEIVE_UPLOAD';


export const receiveUploads = uploads => ({
  type: RECEIVE_UPLOADS,
  uploads
});

export const receiveUpload = upload => ({
  type: RECEIVE_UPLOAD,
  upload
});


export const fetchUploads = () => dispatch => (
  APIUtil.fetchUploads().then(uploads => (
    dispatch(receiveUploads(uploads))
  ))
);

export const fetchUpload = id => dispatch => (
  APIUtil.fetchUpload(id).then(payload => (
    dispatch(receiveUpload(payload))
  ))
);

export const createUpload = upload => dispatch => (
  APIUtil.createUpload(upload).then(upload => (
    dispatch(receiveUpload(upload))
  ))
);
