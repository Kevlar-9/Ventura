import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import play from '../assets/play-circle.svg'
import menu from '../assets/menu.svg'

function Navbar() {
  const activeStyles = ({ isActive }) =>
    isActive ? 'text-[#0000FF] font-semibold italic' : 'text-gray-600 hover:text-[#0000FF] transition duration-150';

  return (
    <nav className='font-[arial] w-full fixed top-0 z-50 bg-white shadow-sm'>
      <div className='hidden sm:flex max-w-7xl mx-auto p-4 px- w-full h-full items-center'>
        <div className='flex gap-4 text-sm items-center justify-evenly w-full'>
          <img className='w-24' src={logo} alt="Ventura logo" />
          <div className='flex justify-evenly items-center w-full whitespace-nowrap'>
            <NavLink to="/Product" className={activeStyles}>Products</NavLink>
            <NavLink to="/Apps" className={activeStyles}>Apps</NavLink>
            <NavLink to="/Blog" className={activeStyles}>Blog</NavLink>
            <NavLink to="/Pricing" className={activeStyles}>Pricing</NavLink>
          </div>
        </div>
        <div className='flex items-center gap-2 text-sm w-full justify-center'>
          <Link to="/">
            <button className='flex gap-2 items-center bg-gray-50 hover:bg-gray-100 border border-gray-200 transition py-2 px-3 rounded-lg whitespace-nowrap'>
              <img src={play} alt="" className='w-4' />
              Watch video
            </button>
          </Link>
          <Link to="/">
            <button className='bg-[#0000FF] hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-150 whitespace-nowrap'>
              Download Now
            </button>
          </Link>
        </div>
      </div>


      <div className='sm:hidden w-full flex p-4 px-10 justify-between'>
        <div className='flex w-full items-center justify-between'>
          <div>
            <img className='w-25' src={logo} alt="Ventura logo" />
          </div>
          <div className='relative'>
            <img className='w-7 cursor-pointer' src={menu} alt="" onClick={() => {
              const menu = document.getElementById('menu');
              if (menu.classList.toggle('hidden')) {
                menu.style.display = 'none'
              } else {
                menu.style.display = 'flex'
              }
            }} />
          </div>
        </div>
        <div className='hidden absolute top-15 left-0  flex-col items-center w-full h-full' id='menu'>
          <Link to="/Product" className='w-full bg-blue-600 p-3 text-center hover:italic hover:text-white hover:bg-[#0000FF] transition duration-150'>Products</Link>
          <Link to="/Apps" className='w-full bg-blue-600 p-3 text-center hover:italic hover:text-white hover:bg-[#0000FF] transition duration-150'>Apps</Link>
          <Link to="/Blog" className='w-full bg-blue-600 p-3 text-center hover:italic hover:text-white hover:bg-[#0000FF] transition duration-150'>Blog</Link>
          <Link to="/Pricing" className='w-full bg-blue-600 p-3 text-center hover:italic hover:text-white hover:bg-[#0000FF] transition duration-150'>Pricing</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
