import { put, delay, call } from 'redux-saga/effects'

import {
  getPostsApi,
  getPostApi,
  createPostApi,
  deletePostApi,
  updatePostApi,
} from '../../utils/api'
import {
  getPostsError,
  getPostsSuccess,
  getPostSuccess,
  getPostError,
  createPostSuccess,
  createPostError,
  deletePostError,
  deletePostSuccess,
  updatePostSuccess,
  updatePostError,
} from '../actions/actionsPost'

// GET POSTS
export function* onGetPostsStartAsync() {
  try {
    const data = yield call(getPostsApi)
    yield put(getPostsSuccess(data))
  } catch (error) {
    yield put(getPostsError(error.data.error))
  }
}

// GET POST
export function* onGetPostStartAsync({ payload: postId }) {
  // console.log(postId)
  try {
    const data = yield call(getPostApi, postId)
    yield put(getPostSuccess(data))
  } catch (error) {
    yield put(getPostError(error.data.error))
  }
}

// CREATE POST
export function* onCreatePostStartAsync({ payload }) {
  // console.log(payload)

  try {
    yield call(createPostApi, payload)
    yield put(createPostSuccess())
  } catch (error) {
    yield put(createPostError(error.data.error))
  }
}

// UPDATE POST
export function* onUpdatePostStartAsync({ payload: { id, formData } }) {
  try {
    yield call(updatePostApi, id, formData)
    put(updatePostSuccess())
  } catch (error) {
    yield put(updatePostError(error.data.error))
  }
}

// DELETE USER
export function* onDeletePostStartAsync(postId) {
  try {
    yield call(deletePostApi, postId)
    yield put(deletePostSuccess(postId))
  } catch (error) {
    yield put(deletePostError(error.response.data))
  }
}
