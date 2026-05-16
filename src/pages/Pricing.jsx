import { Link } from 'react-router-dom'
import play from '../assets/play-circle.svg'
import appic1 from '../assets/appic1.svg'
import appic2 from '../assets/appic2.svg'
import appic3 from '../assets/appic3.svg'

function Pricing() {
    return (
        <div className='min-h-screen pt-32 pb-10'>
            <div className='max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-10 w-full'>
                <div className='flex flex-col gap-6 items-center'>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 leading-[1.1] max-w-4xl'>
                        Solo or with a team, we're here to support you.
                    </h1>
                    <p className='text-lg md:text-xl leading-relaxed max-w-2xl text-slate-800 font-medium'>
                        Enjoy your first 30 days free with no credit card needed.
                    </p>
                </div>
            </div>



            <div className='max-w-7xl mx-auto px-6 py-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
                    {/* Personal Plan */}
                    <div className='bg-white border border-gray-100 rounded-[2rem] p-10 flex flex-col gap-8 shadow-sm hover:shadow-xl transition-all duration-300'>
                        <div>
                            <span className='bg-blue-50/50 text-[#0000FF] px-5 py-2 rounded-full text-xs font-extrabold tracking-[0.2em] uppercase'>
                                Personal
                            </span>
                        </div>
                        <div className='flex items-baseline gap-1'>
                            <span className='text-6xl font-bold text-slate-900'>$8</span>
                            <span className='text-slate-900 font-semibold'>/month</span>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-2xl font-bold text-slate-900'>A Great Start for Beginners</h2>
                            <p className='text-slate-400 text-sm leading-relaxed font-medium'>
                                Begin your journey with our free version. No payment required just dive in and discover the basics!
                            </p>
                        </div>
                        <ul className='flex flex-col gap-5 my-2'>
                            {[1, 2, 3].map((_, i) => (
                                <li key={i} className='flex items-center gap-4 text-slate-800 font-semibold text-[15px]'>
                                    <svg className='w-4 h-4 text-[#0000FF]' fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Tick value goes here
                                </li>
                            ))}
                            {[1, 2, 3].map((_, i) => (
                                <li key={i} className='flex items-center gap-4 text-slate-200 font-semibold text-[15px]'>
                                    <svg className='w-4 h-4 text-slate-200' fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Tick value goes here
                                </li>
                            ))}
                        </ul>
                        <button className='w-full py-3 px-6 rounded-xl border border-blue-200 text-[#0000FF] font-bold text-sm mt-auto'>
                            Get Started
                        </button>
                    </div>

                    {/* Professional Plan */}
                    <div className='bg-white border border-gray-100 rounded-[2rem] p-10 flex flex-col gap-8 shadow-sm hover:shadow-xl transition-all duration-300'>
                        <div>
                            <span className='bg-blue-50/50 text-[#0000FF] px-5 py-2 rounded-full text-xs font-extrabold tracking-[0.2em] uppercase'>
                                Professional
                            </span>
                        </div>
                        <div className='flex items-baseline gap-1'>
                            <span className='text-6xl font-bold text-slate-900'>$16</span>
                            <span className='text-slate-900 font-semibold'>/month</span>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-2xl font-bold text-slate-900'>Unlock Premium Features</h2>
                            <p className='text-slate-400 text-sm leading-relaxed font-medium'>
                                Take your experience to the next level with our paid version. Unlock exclusive tools, features, and premium support for a more powerful and seamless experience.
                            </p>
                        </div>
                        <ul className='flex flex-col gap-5 my-2'>
                            {[1, 2, 3, 4, 5, 6].map((_, i) => (
                                <li key={i} className='flex items-center gap-4 text-slate-800 font-semibold text-[15px]'>
                                    <svg className='w-4 h-4 text-[#0000FF]' fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Tick value goes here
                                </li>
                            ))}
                        </ul>
                        <button className='w-full py-3 px-6 rounded-xl bg-[#0000FF] text-white font-bold text-sm hover:bg-blue-700 transition-all mt-auto'>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            <section className='max-w-7xl mx-auto px-6 py-24'>
                <div className='flex flex-col lg:flex-row gap-16 lg:gap-24'>
                    {/* FAQ Header */}
                    <div className='w-full lg:w-1/3 flex flex-col gap-4'>
                        <h3 className='text-[#0000FF] font-semibold tracking-widest text-sm uppercase'>FAQ'S</h3>
                        <h1 className='text-4xl md:text-5xl font-semibold text-slate-900 leading-tight'>
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
        </div>
    )
}

export default Pricing