import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className='flex justify-between w-full px-10 py-4 bg-gradient-to-tr from-indigo-600 to-purple-600'>
        <Link to='/' className='text-xl font-bold text-indigo-100'>
          TODO APP
        </Link>
        <ul className='flex space-x-6'>
          <li className='text-lg font-semibold text-indigo-100 cursor-pointer'>
            <Link to='/'>Home</Link>
          </li>
          <li className='text-lg font-semibold text-indigo-100 cursor-pointer'>
            <Link to='/add-post'>Add Todoe</Link>
          </li>
          <li className='text-lg font-semibold text-indigo-100 cursor-pointer'>
            <Link to='/about'>Aboout</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
