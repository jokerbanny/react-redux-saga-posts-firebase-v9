import * as Types from '../actionTypes'

const initailState = {
  posts: [],
  post: {},
  loading: false,
  error: null,
}

const postReducer = (state = initailState, action) => {
  switch (action.type) {
    case Types.GET_POSTS_START:
    case Types.GET_POST_START:
    case Types.CREATE_POST_START:
    case Types.DELETE_POST_START:
    case Types.UPDATE_POST_START:
      return {
        ...state,
        loading: true,
      }
    case Types.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      }
    case Types.GET_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        loading: false,
      }
    case Types.CREATE_POST_SUCCESS:
    case Types.UPDATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case Types.DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((user) => user.id !== action.payload),
        loading: false,
      }
    case Types.GET_POSTS_ERROR:
    case Types.GET_POST_ERROR:
    case Types.DELETE_POST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default postReducer
