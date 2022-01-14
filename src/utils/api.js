import http from '../services/axioApi'

// GET POSTS
export const getPostsApi = async () => {
  return await http.get('/posts')
}

// GET POSTS
export const getPostApi = async (postsId) => {
  return await http.get(`/posts/${postsId}`)
}

// CREATE POST
export const createPostApi = async (post) => {
  return await http.post('/posts', post)
}

// UPDATE POST
export const updatePostApi = async (postId, postInfo) => {
  return await http.put(`/posts/${postId}`, postInfo)
}

// DELETE POST
export const deletePostApi = async (postId) => {
  return await http.delete(`/posts/${postId}`)
}
