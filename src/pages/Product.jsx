import { Link } from 'react-router-dom'
import dashboard from '../assets/dashboard.png'
import check from '../assets/check.svg'
import play from '../assets/play-circle.svg'

function Product() {
    return (
        <main className='min-h-screen pt-32'>
            {/* Product Hero */}
            <section className='max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-16'>
                <div className='w-full lg:w-1/2 flex flex-col gap-8'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-[#0000FF] font-bold tracking-widest text-sm uppercase'>Product Overview</h3>
                        <h1 className='text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1]'>
                            One platform for all your <span className='text-[#0000FF]'>financial needs.</span>
                        </h1>
                        <p className='text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl'>
                            Manage your wealth, track spending, and invest for the future with Ventura's comprehensive suite of tools designed for the modern user.
                        </p>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        <button className='bg-[#0000FF] hover:bg-blue-700 text-white py-4 px-8 rounded-xl font-bold transition duration-200 shadow-xl shadow-blue-200'>
                            Get Started Free
                        </button>
                        <button className='flex gap-2 items-center bg-white border border-gray-200 hover:bg-gray-50 transition py-4 px-6 rounded-xl font-semibold'>
                            <img src={play} alt="" className='w-5' />
                            See how it works
                        </button>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 relative'>
                    <div className='absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl opacity-60'></div>
                    <img src={dashboard} alt="Product Dashboard" className='w-full h-auto object-contain drop-shadow-2xl rounded-3xl border border-white' />
                </div>
            </section>

            {/* Core Features */}
            <section className='bg-slate-50 py-24'>
                <div className='max-w-7xl mx-auto px-6'>
                    <div className='text-center mb-20'>
                        <h2 className='text-4xl font-bold text-slate-900 mb-4'>Built for the next generation</h2>
                        <p className='text-gray-500 max-w-2xl mx-auto text-lg'>
                            Experience a seamless financial ecosystem that adapts to your lifestyle, not the other way around.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        {[
                            { title: 'Smart Budgeting', desc: 'Auto-categorize every transaction and set goals that you will actually hit.' },
                            { title: 'Global Investing', desc: 'Access global markets with zero commission and real-time market insights.' },
                            { title: 'Security First', desc: 'Military-grade encryption and 24/7 fraud monitoring for your peace of mind.' }
                        ].map((item, i) => (
                            <div key={i} className='bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-6 hover:shadow-xl transition-all duration-300'>
                                <div className='w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0000FF]'>
                                    <img src={check} alt="" className='w-6 h-6' />
                                </div>
                                <h3 className='text-xl font-bold text-slate-900'>{item.title}</h3>
                                <p className='text-slate-600 leading-relaxed'>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className='py-24 px-6'>
                <div className='max-w-4xl mx-auto text-center flex flex-col items-center gap-10'>
                    <h2 className='text-4xl md:text-5xl font-bold text-slate-900 leading-tight'>
                        Ready to transform your financial life?
                    </h2>
                    <p className='text-xl text-slate-600 max-w-2xl'>
                        Join over 2 million users who are already building a better future with Ventura. No credit card required.
                    </p>
                    <Link to="/">
                        <button className='bg-[#0000FF] hover:bg-blue-700 text-white py-5 px-12 rounded-2xl font-bold text-xl transition duration-200 shadow-2xl shadow-blue-200 scale-100 hover:scale-105 active:scale-95'>
                            Download Ventura Now
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Product