import { Link } from 'react-router-dom'
import girl from '../assets/Right.svg'
import play from '../assets/play-circle.svg'
import samsung from '../assets/samsung.svg'
import monday from '../assets/monday.svg'
import morpheus from '../assets/morpheus.svg'
import oracle from '../assets/oracle.svg'
import blue from '../assets/blue.svg'
import pink from '../assets/pink.svg'
import purple from '../assets/purple.svg'
import whiteblue from '../assets/whiteblue.svg'
import orange from '../assets/orange.svg'
import rightt from '../assets/rightt.svg'
import check from '../assets/check.svg'

function Home() {
  return (
    <main className='min-h-screen pt-32 pb-20'>
      <div className='max-w-7xl mx-auto px-6 w-full'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>

          <div className='flex flex-col items-start w-full lg:w-1/2 gap-8'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1]'>
              Take full control of your personal finances
            </h1>
            <p className='text-lg md:text-xl leading-relaxed max-w-xl text-black font-semibold text-gray-700'>
              Ventura empowers you with the foundation and flexibility to grow digital capabilities and deliver exceptional customer experiences.
            </p>
            <div className='flex flex-wrap items-center gap-4 text-sm w-full'>
              <Link to="/">
                <button className='bg-[#0000FF] hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition duration-150 whitespace-nowrap'>
                  Download Now
                </button>
              </Link>
              <Link to="/">
                <button className='flex gap-2 items-center bg-gray-50 hover:bg-gray-100 border border-gray-200 transition py-3 px-3 rounded-lg whitespace-nowrap'>
                  <img src={play} alt="" className='w-4' />
                  Watch video
                </button>
              </Link>
            </div>
          </div>

          <div className='w-full lg:w-1/2 relative'>
            <div className='absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl opacity-60'></div>
            <img className='w-full h-auto object-contain drop-shadow-2xl' src={girl} alt="girl pic" />
          </div>
        </div>
        <div className='mt-14 w-full justify-center gap-10 items-center flex flex-col md:flex-row'>
          <img className='w-20' src={monday} alt="" />
          <img className='w-20' src={samsung} alt="" />
          <img className='w-20' src={morpheus} alt="" />
          <img className='w-20' src={oracle} alt="" />
        </div>
      </div>


      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h3 className='text-[#0000FF] font-bold tracking-widest text-sm uppercase mb-3'>Features</h3>
            <h1 className='text-4xl md:text-5xl font-bold text-slate-900'>Our special features</h1>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
            {[
              { icon: whiteblue, title: 'Feature name' },
              { icon: pink, title: 'Feature name' },
              { icon: orange, title: 'Feature name' },
            ].map((feature, index) => (
              <div key={index} className='bg-white p-10 rounded-lg shadow-xs hover:shadow-gray-400/90 translation duration-150 flex flex-col items-center text-center gap-6'>
                <div className='w-16 h-16 flex items-center justify-center rounded-2xl bg-gray-50'>
                  <img src={feature.icon} alt="" className='w-8 h-8' />
                </div>
                <div className='flex flex-col gap-3'>
                  <h3 className='text-xl font-bold '>{feature.title}</h3>
                  <p className=''>
                    Lorem ipsum dolor sit amet consectetur. Urna tristique faucibus turpis pharetra.
                  </p>
                </div>
              </div>
            ))}
          </div>


          <div className='grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-center gap-8'>
            {[
              { icon: blue, title: 'Feature name' },
              { icon: purple, title: 'Feature name' },
            ].map((feature, index) => (
              <div key={index} className='bg-white p-10 rounded-lg shadow-xs hover:shadow-gray-400/90 translation duration-150 flex flex-col items-center text-center gap-6'>
                <div className='w-16 h-16 flex items-center justify-center rounded-2xl bg-gray-50'>
                  <img src={feature.icon} alt="" className='w-8 h-8' />
                </div>
                <div className='flex flex-col gap-3'>
                  <h3 className='text-xl font-bold'>{feature.title}</h3>
                  <p className=''>
                    Lorem ipsum dolor sit amet consectetur. Urna tristique faucibus turpis pharetra.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className='py-24 bg-white overflow-hidden'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-24'>

            {/* Left Content */}
            <div className='w-full lg:w-1/2 flex flex-col gap-8'>
              <div className='flex flex-col gap-4'>
                <h3 className='text-[#0000FF] font-bold tracking-widest text-sm uppercase'>Choose Us</h3>
                <h1 className='text-4xl md:text-5xl font-bold text-slate-900 leading-tight'>
                  Keep track of all your payments with no delays.
                </h1>
                <p className='text-lg text-slate-500 leading-relaxed max-w-lg'>
                  Lorem ipsum dolor sit amet consectetur. Non in bibendum et ut. Facilisi aliquam commodo vitae ipsum dolor.
                </p>
              </div>

              {/* Feature List */}
              <div className='flex flex-col gap-5'>
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className='flex items-center gap-4 group'>
                    <div className='flex-shrink-0 w-6 h-6 flex items-center justify-center'>
                      <img src={check} alt="check" className='w-4 h-4' />
                    </div>
                    <span className='font-semibold text-lg'>Get feature today</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className='w-full lg:w-1/2 relative'>
              <div className='absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl opacity-60'></div>
              <div className='relative rounded-3xl overflow-hidden border border-gray-100'>
                <img className='w-full h-auto object-cover' src={rightt} alt="Dashboard Preview" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='py-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='bg-[#0000FF] rounded-lg p-12 md:p-20 flex flex-col items-center text-center gap-10 shadow-2xl shadow-blue-200'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight'>
              Explore smarter ways to handle your finances.
            </h1>
            <Link to="/">
              <button className='flex gap-2 items-center bg-gray-50 hover:bg-transparent border border-gray-200 transition py-3 px-3 rounded-lg whitespace-nowrap'>
                <img src={play} alt="" className='w-4' />
                Watch video
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home