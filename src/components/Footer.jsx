import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import messenger from '../assets/messenger.svg'

function Footer() {

    return (

        <footer className='w-full bg-white border-t border-gray-100 mt-20'>
            <div className="w-full grid lg:grid-cols-4 items-start md:grid-cols-2 grid-cols-1 p-8 py-16 max-w-7xl mx-auto gap-12">
                <div className='flex flex-col gap-6'>
                    <div>
                        <img className='w-24' src={logo} alt="ventura logo" />
                    </div>
                    <p className='text-gray-500 text-sm leading-relaxed max-w-xs'>
                        Take full control of your personal finances with Ventura. The foundation and flexibility to grow digital capabilities.
                    </p>
                    <div className='flex gap-4'>
                        <Link to='/' className='p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition'><img className='w-5 h-5' src={linkedin} alt="linkedin" /></Link>
                        <Link to='/' className='p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition'><img className='w-5 h-5' src={twitter} alt="twitter" /></Link>
                        <Link to='/' className='p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition'><img className='w-5 h-5' src={messenger} alt="messenger" /></Link>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-slate-900'>Company</h1>
                    <div className='flex flex-col gap-2'>
                        <Link to='/' className='text-gray-600 text-sm hover:text-[#0000FF] transition duration-150'>Products</Link>
                        <Link to='/' className='text-gray-600 text-sm hover:text-[#0000FF] transition duration-150'>Apps</Link>
                        <Link to='/' className='text-gray-600 text-sm hover:text-[#0000FF] transition duration-150'>Blogs</Link>
                        <Link to='/' className='text-gray-600 text-sm hover:text-[#0000FF] transition duration-150'>Pricing</Link>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-slate-900'>Resources</h1>
                    <div className='flex flex-col gap-2'>
                        <Link to='/' className='text-gray-600 text-sm hover:text-[#0000FF] transition duration-150'>Template</Link>
                        <Link to='/' className='text-gray-600 text-sm hover:text-[#0000FF] transition duration-150'>Invoice</Link>
                        <Link to='/' className='text-gray-600 text-sm hover:text-[#0000FF] transition duration-150'>Documentation</Link>
                        <Link to='/' className='text-gray-600 text-sm hover:text-[#0000FF] transition duration-150'>Help Center</Link>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-slate-900'>Join Our Newsletter</h1>
                    <div className='flex flex-col gap-3'>
                        <input
                            type="email"
                            placeholder='Your Email Address'
                            className='w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 text-gray-600 bg-gray-50 rounded-xl text-sm transition'
                        />
                        <button className='w-full bg-[#0000FF] hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-bold transition duration-150 shadow-lg shadow-blue-100'>
                            Subscribe
                        </button>
                    </div>
                    <p className='text-gray-400 text-xs mt-1'>
                        *Will send you weekly updates for better finance management
                    </p>
                </div>
            </div>
            <div className='border-t border-gray-50 py-8 text-center'>
                <p className='text-gray-400 text-xs'>© 2026 Ventura Finance. All rights reserved.</p>
            </div>
        </footer>

    )

}


export default Footer