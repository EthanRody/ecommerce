import React from 'react'

const FooterBanner = () => {
  return (
    <div className="px-3 py-3 bg-primary shadow-sm font-sans">
      <div className="flex flex-col py-2 px-6 md:px-12 md:flex-row justify-between items-center gap-4 mb-4">
        <p className="text-sm md:text-base text-white">Join our newsletter for all the latest information!</p>
          <div className="flex w-full md:w-auto justify-between">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-sm w-full text-white"
              required
            />
            <button 
              type="submit"
              className="bg-secondary text-black px-4 py-2 rounded-r-md transition duration-200 text-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </div>
        

      <div className="inline-block p-2">
        <p className='border-2 border-gray-400 p-4 text-gray-400 text-sm inline-block'>
          The content in this website is not medical advice and it&apos;s intended for informational and educational purposes only.
        </p>
      </div>
    </div>
  )
}

export default FooterBanner