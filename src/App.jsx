import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='w-full'>
        <nav className='bg-white shadow-lg'>
          <div className='md:flex items-center justify-between py-2 px-8 md:px-12'>
            <div className='flex justify-between items-center'>
              <div className='text-2xl font-bold text-gray-800 md:text-3xl'>
                <a href="#">Kohta</a>
              </div>
              <div className='md:hidden'>
                <button type='button' className='block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none'>
                  <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path class="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/>
                            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:block -mx-2'>
              <a href="#" className='text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2'>HOME</a>
              <a href="#" className='text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2'>ABOUT</a>
              <a href="#" className='text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2'>SKILLS</a>
              <a href="#" className='text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2'>BLOG</a>
              <a href="#" className='text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2'>CONTACT</a>
            </div>
          </div>
        </nav>
        {/* <div className='flex bg-white' style="height:600px;">
          <div className='flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2'>
            <div>
              <h2 className='text-3xl font-semibold text-gray-800 md:text-4xl'>Build Your New <span className='text-indigo-600'>Idea</span></h2>
              <p class="mt-2 text-sm text-gray-500 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!</p>
                <div class="flex justify-center lg:justify-start mt-6">
                    <a class="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#">Get Started</a>
                    <a class="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#">Learn More</a>
                </div>
            </div>
          </div>
          <div class="hidden lg:block lg:w-1/2" style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">
            <div class="h-full object-cover" style="background-image: url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)">
                <div class="h-full bg-black opacity-25"></div>
            </div>
          </div>
        </div> */}
      </div>
  )
}

export default App
