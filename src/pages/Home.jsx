import Posts from '../components/Posts'
import { getPostsStart } from '../redux/actions/actionsPost'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

function Home() {
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.data)

  useEffect(() => {
    dispatch(getPostsStart())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <Posts posts={posts} />
    </div>
  )
}

export default Home
