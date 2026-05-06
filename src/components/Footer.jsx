import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import messenger from '../assets/messenger.svg'
function Footer() {

    return (

        <div className='font-[arial] w-full fixed bottom-0 z-50 bg-white shadow-sm border-t border-gray-800'>
            <div className="w-full grid lg:grid-cols-4 items-start md:grid-cols-2 grid-cols-1 p-8 max-w-7xl mx-auto gap-8">
                <div className='flex flex-col gap-4'>
                    <div>
                        <img className='w-24' src={logo} alt="ventura logo" />
                    </div>
                    <div>
                        <p className='text-gray-600 text-sm'>
                            Lorem ipsum dolor sit amet consectetur. Non in bibendum et ut.
                        </p>
                    </div>
                    <div className='flex gap-3'>
                        <Link to='/'><img className='w-5 h-5' src={linkedin} alt="linkedin" /></Link>
                        <Link to='/'><img className='w-5 h-5' src={twitter} alt="twitter" /></Link>
                        <Link to='/'><img className='w-5 h-5' src={messenger} alt="messenger" /></Link>
                    </div>
                </div>

                <div className='font-[arial] flex flex-col gap-3 w-full'>
                    <h1 className='font-semibold text-lg'>Company</h1>
                    <Link to='/'><h3 className='text-gray-600 text-sm hover:text-[#0000FF] hover:italic transition duration-150'>Products</h3></Link>
                    <Link to='/'><h3 className='text-gray-600 text-sm hover:text-[#0000FF] hover:italic transition duration-150'>Apps</h3></Link>
                    <Link to='/'><h3 className='text-gray-600 text-sm hover:text-[#0000FF] hover:italic transition duration-150'>Blogs</h3></Link>
                    <Link to='/'><h3 className='text-gray-600 text-sm hover:text-[#0000FF] hover:italic transition duration-150'>Pricing</h3></Link>
                </div>

                <div className='font-[arial] flex flex-col gap-3 w-full'>
                    <h1 className='font-semibold text-lg'>Resources</h1>
                    <Link to='/'><h3 className='text-gray-600 text-sm hover:text-[#0000FF] hover:italic transition duration-150'>Template</h3></Link>
                    <Link to='/'><h3 className='text-gray-600 text-sm hover:text-[#0000FF] hover:italic transition duration-150'>Invoice</h3></Link>
                    <Link to='/'><h3 className='text-gray-600 text-sm hover:text-[#0000FF] hover:italic transition duration-150'>Feature name</h3></Link>
                    <Link to='/'><h3 className='text-gray-600 text-sm hover:text-[#0000FF] hover:italic transition duration-150'>Feature name</h3></Link>
                </div>

                <div className='font-[arial] flex flex-col gap-3 w-full'>
                    <h1 className='font-semibold text-lg'>Join Our Newsletter</h1>
                    <div className='flex gap-4 lg:flex-col'>
                        <input 
                            type="email" 
                            placeholder='Your Email Address' 
                            className='w-50 font-semibold px-3 py-3 ring-2 ring-gray-200 focus:outline-2 focus:outline-gray-300 focus:italic text-gray-500 bg-gray-100 rounded-lg text-sm'
                        />
                        <button className='lg:w-50 lg:textmd lg:py-3 lg:px-3 bg-[#0000FF] hover:bg-[#0000CC] text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-150'>
                            Subscribe
                        </button>
                    </div>
                    <p className='text-gray-400 text-sm mb-3'>
                        *Will send you weekly updates for better finance management
                    </p>
                </div>
            </div>
        </div>

    )

}


export default Footer