import {
  call,
  take,
  all,
  fork,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects'
import * as Types from './actionTypes'

import {
  onGetPostsStartAsync,
  onGetPostStartAsync,
  onCreatePostStartAsync,
  onDeletePostStartAsync,
  onUpdatePostStartAsync,
} from './sagas/postSaga'

// GET POSTS
function* onGetPosts() {
  yield takeEvery(Types.GET_POSTS_START, onGetPostsStartAsync)
}

// GET POST
function* onGetPost() {
  yield takeEvery(Types.GET_POST_START, onGetPostStartAsync)
}

// CREATE POST
function* onCreatePost() {
  yield takeEvery(Types.CREATE_POST_START, onCreatePostStartAsync)
}

// START DELETE POST
function* onDeletePost() {
  while (true) {
    const { payload: postId } = yield take(Types.DELETE_POST_START)
    yield call(onDeletePostStartAsync, postId)
  }
}

function* onUpdatePost() {
  yield takeLatest(Types.UPDATE_POST_START, onUpdatePostStartAsync)
}

const postSagas = [
  fork(onGetPosts),
  fork(onGetPost),
  fork(onCreatePost),
  fork(onUpdatePost),
  fork(onDeletePost),
]

export default function* rootSaga() {
  yield all([...postSagas])
}
