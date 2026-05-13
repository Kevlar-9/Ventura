import { Link } from 'react-router-dom'
import play from '../assets/play-circle.svg'
import appic1 from '../assets/appic1.svg'
import appic2 from '../assets/appic2.svg'
import appic3 from '../assets/appic3.svg'

function Apps() {
    return (
        <div className='min-h-screen pt-32 pb-10'>
            <div className='max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-10 w-full'>
                <div className='flex flex-col gap-6 items-center'>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 leading-[1.1] max-w-4xl'>
                        Available across all platforms, built for everyone
                    </h1>
                    <p className='text-lg md:text-xl leading-relaxed max-w-2xl text-slate-600 font-medium'>
                        Ventura empowers you with the foundation and flexibility to grow digital capabilities and deliver exceptional customer experiences.
                    </p>
                </div>

                <div className='flex flex-wrap items-center justify-center gap-4 text-sm w-full'>
                    <Link to="/">
                        <button className='bg-[#0000FF] hover:bg-blue-700 text-white py-4 px-8 rounded-xl transition duration-150 whitespace-nowrap font-semibold shadow-xl shadow-blue-100'>
                            Download Now
                        </button>
                    </Link>
                    <Link to="/">
                        <button className='flex gap-2 items-center bg-gray-50 hover:bg-gray-100 border border-gray-200 transition py-4 px-6 rounded-xl whitespace-nowrap font-semibold'>
                            <img src={play} alt="" className='w-4' />
                            Watch video
                        </button>
                    </Link>
                </div>
            </div>

            <div className='max-w-7xl mx-auto px-6 py-15'>
                <div className='flex flex-col lg:flex-row items-center gap-16'>
                    <div className='w-full lg:w-1/2'>
                        <div className='relative  overflow-hidden shadow-2xl border border-gray-100'>
                            <img src={appic1} alt='App Preview' className='w-full h-auto object-cover' />
                        </div>
                    </div>


                    <div className='w-full lg:w-1/2 flex flex-col items-start gap-8'>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-[#0000FF] text-sm font-semibold tracking-widest uppercase'>Choose Us</h3>
                            <h1 className='text-4xl md:text-5xl font-semibold text-slate-900 leading-tight'>
                                Placeholder text goes right here
                            </h1>
                            <p className='text-lg text-slate-500 leading-relaxed max-w-lg'>
                                Lorem ipsum dolor sit amet consectetur. Non in bibendum et ut. Facilisi aliquam commodo vitae ipsum dolor.
                            </p>
                        </div>
                        <Link to="/">
                            <button className='bg-[#0000FF] hover:bg-blue-700 text-white py-3 px-5 rounded-xl font-semibold transition duration-200 shadow-lg shadow-blue-100 text-sm'>
                                Download for PC
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto px-6 py-15'>
                <div className='flex flex-col lg:flex-row items-center gap-16'>
                    <div className='w-full lg:w-1/2'>
                        <div className='relative  overflow-hidden shadow-2xl border border-gray-100'>
                            <img src={appic2} alt='App Preview' className='w-full h-auto object-cover' />
                        </div>
                    </div>


                    <div className='w-full lg:w-1/2 flex flex-col items-start gap-8'>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-[#0000FF] text-sm font-semibold tracking-widest uppercase'>Choose Us</h3>
                            <h1 className='text-4xl md:text-5xl font-semibold text-slate-900 leading-tight'>
                                Placeholder text goes right here
                            </h1>
                            <p className='text-lg text-slate-500 leading-relaxed max-w-lg'>
                                Lorem ipsum dolor sit amet consectetur. Non in bibendum et ut. Facilisi aliquam commodo vitae ipsum dolor.
                            </p>
                        </div>
                        <Link to="/">
                            <button className='bg-[#0000FF] hover:bg-blue-700 text-white py-3 px-5 rounded-xl font-semibold transition duration-200 shadow-lg shadow-blue-100 text-sm'>
                                Download for PC
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


            <div className='max-w-7xl mx-auto px-6 py-15'>
                <div className='flex flex-col lg:flex-row items-center gap-16'>
                    <div className='w-full lg:w-1/2'>
                        <div className='relative  overflow-hidden shadow-2xl border border-gray-100'>
                            <img src={appic3} alt='App Preview' className='w-full h-auto object-cover' />
                        </div>
                    </div>


                    <div className='w-full lg:w-1/2 flex flex-col items-start gap-8'>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-[#0000FF] text-sm font-semibold tracking-widest uppercase'>Choose Us</h3>
                            <h1 className='text-4xl md:text-5xl font-semibold text-slate-900 leading-tight'>
                                Placeholder text goes right here
                            </h1>
                            <p className='text-lg text-slate-500 leading-relaxed max-w-lg'>
                                Lorem ipsum dolor sit amet consectetur. Non in bibendum et ut. Facilisi aliquam commodo vitae ipsum dolor.
                            </p>
                        </div>
                        <Link to="/">
                            <button className='bg-[#0000FF] hover:bg-blue-700 text-white py-3 px-5 rounded-xl font-semibold transition duration-200 shadow-lg shadow-blue-100 text-sm'>
                                Download for PC
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apps