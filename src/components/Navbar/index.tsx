import { NavLink } from 'react-router-dom';


export default function index() {
  return (

          <nav className='justify-center flex bg-gray-900 h-20'>
            <NavLink to='/' className='text-blue-300 mx-5 my-5 font-bold sm:text-xl md:mx-4 '>Home</NavLink>
            <NavLink to='/about' className='text-blue-300 mx-5 my-5 font-bold sm:text-xl md:mx-4 '>About</NavLink>
            <NavLink to='/quotes' className='text-blue-300 mx-5 my-5 font-bold sm:text-xl md:mx-4 '>Quotes</NavLink>  
          </nav>
  
  )
}
