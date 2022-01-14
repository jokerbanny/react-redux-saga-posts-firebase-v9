import * as Types from '../actionTypes'

// GET POSTS
export const getPostsStart = () => ({
  type: Types.GET_POSTS_START,
})

export const getPostsSuccess = (posts) => ({
  type: Types.GET_POSTS_SUCCESS,
  payload: posts,
})

export const getPostsError = (error) => ({
  type: Types.GET_POSTS_ERROR,
  payload: error,
})

// GET POST
export const getPostStart = (postId) => ({
  type: Types.GET_POST_START,
  payload: postId,
})

export const getPostSuccess = (post) => ({
  type: Types.GET_POST_SUCCESS,
  payload: post,
})

export const getPostError = (error) => ({
  type: Types.GET_POST_ERROR,
  payload: error,
})

// CREATE POSTS
export const createPostStart = (post) => ({
  type: Types.CREATE_POST_START,
  payload: post,
})

export const createPostSuccess = () => ({
  type: Types.CREATE_POST_SUCCESS,
})

export const createPostError = (error) => ({
  type: Types.CREATE_POST_ERROR,
  payload: error,
})

// UPDATE POSTS
export const updatePostStart = (post) => ({
  type: Types.UPDATE_POST_START,
  payload: post,
})

export const updatePostSuccess = () => ({
  type: Types.UPDATE_POST_SUCCESS,
})

export const updatePostError = (error) => ({
  type: Types.UPDATE_POST_ERROR,
  payload: error,
})

// UPDATE POSTS
export const deletePostStart = (postId) => ({
  type: Types.DELETE_POST_START,
  payload: postId,
})

export const deletePostSuccess = (postId) => ({
  type: Types.DELETE_POST_SUCCESS,
  payload: postId,
})

export const deletePostError = (error) => ({
  type: Types.DELETE_POST_ERROR,
  payload: error,
})
