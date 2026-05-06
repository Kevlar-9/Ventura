import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-32'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Hero Section */}
        <section className='py-20 text-center'>
          <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
            Welcome to Ventura
          </h1>
          <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
            Discover innovative solutions that transform your ideas into reality. 
            Build, create, and innovate with our powerful platform.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to="/">
              <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-150 shadow-lg'>
                Get Started
              </button>
            </Link>
            <Link to="/">
              <button className='bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-8 rounded-lg transition duration-150 shadow-lg border border-blue-200'>
                Learn More
              </button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
            Why Choose Ventura?
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-white p-8 rounded-xl shadow-lg'>
              <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
                <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>Lightning Fast</h3>
              <p className='text-gray-600'>
                Experience blazing performance with our optimized infrastructure and cutting-edge technology.
              </p>
            </div>
            <div className='bg-white p-8 rounded-xl shadow-lg'>
              <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4'>
                <svg className='w-6 h-6 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>Reliable</h3>
              <p className='text-gray-600'>
                Trust in our proven track record of 99.9% uptime and enterprise-grade security.
              </p>
            </div>
            <div className='bg-white p-8 rounded-xl shadow-lg'>
              <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4'>
                <svg className='w-6 h-6 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>Customizable</h3>
              <p className='text-gray-600'>
                Tailor every aspect to your needs with our flexible configuration options.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 text-center'>
          <div className='bg-blue-600 rounded-2xl p-12 text-white'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Ready to Get Started?
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              Join thousands of satisfied users who have transformed their workflow.
            </p>
            <Link to="/">
              <button className='bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-150 shadow-lg'>
                Start Your Free Trial
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home