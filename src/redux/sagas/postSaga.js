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
    const response = yield call(getPostsApi)
    if (response.status === 200) {
      yield put(getPostsSuccess(response.data))
    }
  } catch (error) {
    yield put(getPostsError(error.data.error))
  }
}

// GET POST
export function* onGetPostStartAsync({ payload: postId }) {
  // console.log(postId)
  try {
    const response = yield call(getPostApi, postId)
    if (response.status === 200) {
      yield put(getPostSuccess(response.data))
    }
  } catch (error) {
    yield put(getPostError(error.data.error))
  }
}

// CREATE POST
export function* onCreatePostStartAsync({ payload }) {
  // console.log(payload)

  try {
    const response = yield call(createPostApi, payload)
    if (response.status === 200) {
      delay(500)
      yield put(createPostSuccess(response.data))
    }
  } catch (error) {
    yield put(createPostError(error.data.error))
  }
}

// UPDATE POST
export function* onUpdatePostStartAsync({ payload: { id, formData } }) {
  try {
    const response = yield call(updatePostApi, id, formData)
    if (response.status === 200) {
      put(updatePostSuccess())
    }
  } catch (error) {
    yield put(updatePostError(error.data.error))
  }
}

// DELETE USER
export function* onDeletePostStartAsync(postId) {
  try {
    const response = yield call(deletePostApi, postId)
    if (response.status === 200) {
      yield put(deletePostSuccess(postId))
    }
  } catch (error) {
    yield put(deletePostError(error.response.data))
  }
}
