import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deletePostStart, updatePostStart } from '../redux/actions/actionsPost'

function PostItem({ post }) {
  const dispatch = useDispatch()
  return (
    <div className='px-10 my-10'>
      <div className='max-w-4xl p-4 mx-auto space-y-4 duration-300 transform bg-white rounded-md shadow-lg hover:scale-105'>
        <h3 className='mb-2 font-semibold'>
          Title: <span className='font-thin'>{post.title}</span>
        </h3>
        <h3 className='pt-3 mb-2 font-semibold border-t'>
          Name: <span className='font-thin'>{post.name}</span>
        </h3>
        <div className='flex justify-end space-x-2'>
          <Link to={`/posts/${post.id}`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 text-green-500 cursor-pointer'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
              />
            </svg>
          </Link>
          <Link to={`edit-post/${post.id}`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 text-indigo-600 cursor-pointer'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
              />
            </svg>
          </Link>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 text-red-500 cursor-pointer'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            onClick={() => dispatch(deletePostStart(post.id))}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default PostItem
