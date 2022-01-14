import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { createPostStart, updatePostStart } from '../redux/actions/actionsPost'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AddEditPost() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { id } = useParams()

  const [editMode, setEditMode] = useState(false)

  const { posts, loading } = useSelector((state) => state.data)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    name: '',
    email: '',
  })

  useEffect(() => {
    if (id) {
      setEditMode(true)
      const singlePost = posts.find((item) => item.id === id)
      setFormData({ ...singlePost })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if (loading) {
    return <h3>Loading...</h3>
  }

  const handleInput = (name) => (e) => {
    setFormData({ ...formData, [name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      dispatch(updatePostStart({ id, formData }))
    } else {
      dispatch(createPostStart(formData))
    }
    navigate('/')
  }

  const { title, description, name, email } = formData

  if (loading) {
    return <h3>Loading...</h3>
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <div className='min-h-screen pt-6 bg-indigo-50 md:px-20'>
          <div className='max-w-2xl px-6 py-10 mx-auto bg-white rounded-md '>
            <h1 className='mb-10 text-2xl font-bold text-center text-gray-500'>
              ADD POST
            </h1>
            <div className='space-y-4'>
              <div>
                <label htmlFor='title' className='font-serif text-lx'>
                  Title:
                </label>
                <input
                  type='text'
                  placeholder='title'
                  id='title'
                  className='px-2 py-1 ml-2 border-2 rounded-md outline-none text-md'
                  value={title}
                  onChange={handleInput('title')}
                />
              </div>
              <div>
                <label
                  htmlFor='description'
                  className='block mb-2 font-serif text-lg'
                >
                  Description:
                </label>
                <textarea
                  id='description'
                  cols='30'
                  rows='10'
                  placeholder='whrite here..'
                  className='w-full p-4 font-serif text-gray-600 rounded-md outline-none bg-indigo-50'
                  value={description}
                  onChange={handleInput('description')}
                ></textarea>
              </div>
              <div>
                <label htmlFor='name' className='font-serif text-lx'>
                  Name:
                </label>
                <input
                  type='text'
                  placeholder='name'
                  id='name'
                  className='px-2 py-1 ml-2 border-2 rounded-md outline-none text-md'
                  value={name}
                  onChange={handleInput('name')}
                />
              </div>
              <div>
                <label htmlFor='email' className='font-serif text-lx'>
                  Email:
                </label>
                <input
                  type='text'
                  placeholder='name'
                  id='email'
                  className='px-2 py-1 ml-2 border-2 rounded-md outline-none text-md'
                  value={email}
                  onChange={handleInput('email')}
                />
              </div>
              <button className='block px-6 py-2 mx-auto text-lg font-semibold text-indigo-100 bg-indigo-600 rounded-md '>
                {!editMode ? 'ADD POST' : 'UPDATE POST'}
              </button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default AddEditPost
