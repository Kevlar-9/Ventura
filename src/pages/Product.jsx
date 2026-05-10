import { Link } from 'react-router-dom'
import dashboard from '../assets/dashboard.png'
import check from '../assets/check.svg'
import play from '../assets/play-circle.svg'
import rightt from '../assets/rightt.svg'
import imageright from '../assets/imageright.svg'


function Product() {
    return (
        <main className='min-h-screen pt-32'>
            <div className='bg-red-50/50 h-[500px] flex flex-col items-center justify-center text-center px-6 gap-8 w-full'>
                <div className='flex flex-col gap-4 items-center'>
                    <h1 className='text-4xl md:text-6xl font-bold text-slate-900 max-w-3xl leading-tight'>
                        Simple, accessible, <br className='hidden md:block' /> and made for all.
                    </h1>
                    <p className='text-slate-600 text-lg md:text-xl max-w-2xl leading-relaxed'>
                        Ventura empowers you with the foundation and flexibility to grow digital capabilities and deliver exceptional customer experiences.
                    </p>
                </div>

                <div className='flex flex-wrap items-center justify-center gap-4 w-full'>
                    <Link to="/">
                        <button className='bg-[#0000FF] hover:bg-blue-700 text-white py-3.5 px-8 rounded-xl font-bold transition duration-150 whitespace-nowrap shadow-lg shadow-blue-100'>
                            Download Now
                        </button>
                    </Link>
                    <Link to="/">
                        <button className='flex gap-2 items-center bg-white hover:bg-gray-50 border border-gray-200 transition py-3.5 px-6 rounded-xl font-semibold whitespace-nowrap'>
                            <img src={play} alt="" className='w-4' />
                            Watch video
                        </button>
                    </Link>
                </div>
            </div>

            {/* Section 1: Image Left, Text Right */}
            <div className='max-w-7xl mx-auto px-6 py-24'>
                <div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-24'>
                    {/* Left Image */}
                    <div className='w-full lg:w-1/2 relative'>
                        <div className='absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl opacity-60'></div>
                        <div className='relative rounded-3xl overflow-hidden border border-gray-100 shadow-2xl'>
                            <img className='w-full h-auto object-cover' src={rightt} alt="Dashboard Preview" />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className='w-full lg:w-1/2 flex flex-col gap-8'>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-[#0000FF] font-bold tracking-widest text-sm uppercase'>Choose Us</h3>
                            <h1 className='text-4xl md:text-5xl font-bold text-slate-900 leading-tight'>
                                Placeholder text goes right here
                            </h1>
                            <p className='text-lg text-slate-500 leading-relaxed'>
                                Lorem ipsum dolor sit amet consectetur. Non in bibendum et ut. Facilisi aliquam commodo vitae ipsum dolor.
                            </p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className='flex items-center gap-4'>
                                    <div className='flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-50 text-blue-600'>
                                        <img src={check} alt="check" className='w-4 h-4' />
                                    </div>
                                    <span className='font-semibold text-lg text-slate-700'>Get feature today</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: Text Left, Image Right */}
            <div className='max-w-7xl mx-auto px-6 py-24'>
                <div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-24'>
                    {/* Left Content */}
                    <div className='w-full lg:w-1/2 flex flex-col gap-8 order-2 lg:order-1'>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-[#0000FF] font-bold tracking-widest text-sm uppercase'>Choose Us</h3>
                            <h1 className='text-4xl md:text-5xl font-bold text-slate-900 leading-tight'>
                                Placeholder text goes right here
                            </h1>
                            <p className='text-lg text-slate-500 leading-relaxed'>
                                Lorem ipsum dolor sit amet consectetur. Non in bibendum et ut. Facilisi aliquam commodo vitae ipsum dolor.
                            </p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className='flex items-center gap-4'>
                                    <div className='flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-50 text-blue-600'>
                                        <img src={check} alt="check" className='w-4 h-4' />
                                    </div>
                                    <span className='font-semibold text-lg text-slate-700'>Get feature today</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className='w-full lg:w-1/2 relative order-1 lg:order-2'>
                        <div className='absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl opacity-60'></div>
                        <div className='relative rounded-3xl overflow-hidden border border-gray-100 shadow-2xl'>
                            <img className='w-full h-auto object-cover' src={imageright} alt="Analytics Preview" />
                        </div>
                    </div>
                </div>
            </div>
            {/* FAQ Section */}
            <section className='max-w-7xl mx-auto px-6 py-24'>
                <div className='flex flex-col lg:flex-row gap-16 lg:gap-24'>
                    {/* FAQ Header */}
                    <div className='w-full lg:w-1/3 flex flex-col gap-4'>
                        <h3 className='text-[#0000FF] font-bold tracking-widest text-sm uppercase'>FAQ'S</h3>
                        <h1 className='text-4xl md:text-5xl font-bold text-slate-900 leading-tight'>
                            Frequently Asked Questions
                        </h1>
                    </div>

                    {/* FAQ Items */}
                    <div className='w-full lg:w-2/3 flex flex-col'>
                        {[1, 2, 3, 4, 5].map((item, i) => (
                            <div key={i} className='border-b border-gray-100 last:border-0'>
                                <details className='group py-6' open={i === 0}>
                                    <summary className='flex justify-between items-center font-semibold text-lg cursor-pointer list-none list-inside'>
                                        <span className='text-slate-800 pr-4'>Add commonly asked questions here</span>
                                        <span className='transition group-open:rotate-180'>
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className='mt-4 text-slate-500 leading-relaxed animate-fadeIn'>
                                        Lorem ipsum dolor sit amet consectetur. Non in bibendum et ut. Facilisi aliquam commodo vitae ipsum dolor.
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Product