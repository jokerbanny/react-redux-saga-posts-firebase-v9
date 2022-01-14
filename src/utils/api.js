import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  getDoc,
} from 'firebase/firestore'
import db from '../database/firebase'

const colectionRef = collection(db, 'posts')

// GET POSTS
export const getPostsApi = async () => {
  const data = await getDocs(colectionRef)
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
}

// GET POSTS
export const getPostApi = async (postsId) => {
  const docRef = doc(db, 'posts', postsId)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists) {
    return docSnap.data()
  }
}

// CREATE POST
export const createPostApi = async (post) => {
  return await addDoc(colectionRef, post)
}

// Update User
export const updatePostApi = async (postId, postInfo) => {
  const postDoc = doc(db, 'posts', postId)
  return await updateDoc(postDoc, postInfo)
}

// Delete User
export const deletePostApi = async (postId) => {
  const userDoc = doc(db, 'posts', postId)
  return await deleteDoc(userDoc)
}
