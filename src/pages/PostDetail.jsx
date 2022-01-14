import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getPostStart } from '../redux/actions/actionsPost'

function PostDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { post, loading } = useSelector((state) => state.data)

  useEffect(() => {
    dispatch(getPostStart(id))
  }, [])

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <div className='px-10 mt-10'>
      <div className='max-w-4xl p-4 mx-auto space-y-4 bg-white rounded-md shadow-lg'>
        <h3 className='mb-2 font-semibold'>
          Title: <span className='font-thin'>{post.title}</span>
        </h3>
        <div className='pt-2'>
          <h3 className='font-semibold'>Description:</h3>
          <p className='mt-2 font-thin'> {post.description}</p>
        </div>
        <h3 className='pt-3 mb-2 font-semibold border-t'>
          Name: <span className='font-thin'> {post.name}</span>
        </h3>
        <h3 className='pt-3 mb-2 font-semibold border-t'>
          Email:
          <span className='font-thin'> {post.email}</span>
        </h3>
      </div>
      <button className='block px-6 py-2 mx-auto mt-6 text-indigo-100 bg-indigo-600 rounded-md '>
        <Link to='/'>Go Back</Link>
      </button>
    </div>
  )
}

export default PostDetail
