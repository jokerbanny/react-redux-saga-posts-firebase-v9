import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import AddEditPost from './pages/AddEditPost'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/add-post' element={<AddEditPost />} />
        <Route path='/edit-post/:id' element={<AddEditPost />} />
        <Route path='/posts/:id' element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
