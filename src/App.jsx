import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12'>
      <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <header className='flex justify-between items-center py-4 md:py-8 mb-5 md:mb-12 xl:mb-13'>
          {/* logo */}
          <a href="#" className='inline-flex items-center text-block-800 text-2xl md:text-3xl font-bold gap-2.5' aria-label='logo'>Kohta</a>

          {/* nav */}
          <nav className='hidden lg:flex gap-12'>
            <a href="#" className='text-indigo-500 text-lg font-semibold'>Home</a>
            <a href="#about" className='text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transirion duraition-100'>About</a>
            <a href="#" className='text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transirion duraition-100'>Skills</a>
            <a href="#" className='text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transirion duraition-100'>Blog</a>
            <a href="#" className='text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transirion duraition-100'>Work</a>
            <a href="#" className='text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transirion duraition-100'>Contact</a>
          </nav>

          {/* button */}
          <a href="#" className='hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3'>Contact</a>

          <button type='button' className='inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>

            Menu
          </button>
        </header>

        {/* content */}
        <section class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          <div class="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
          <p class="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">Very proud to introduce</p>

          <h1 class="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">Revolutionary way to build the web</h1>

          <p class="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.</p>

          <div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
          <a href="#" class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Start now</a>

          <a href="#" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Take tour</a>
            </div>
          </div>

          <div class="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
          <img src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Fakurian Design" class="w-full h-full object-cover object-center" />
        </div>
        </section>

        {/* about */}
        <div className='bg-white py-6 sm:py-8 lg:py-12' id='about'>
          <div className='max-w-screen-xl px-4 md:px-8 mx-auto'>
            <div className='grid md:grid-cols-2 gap-2 lg:gap-12'>
              <div>
                <div className='h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg'>
                <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750" loading="lazy" alt="Photo by Martin Sanchez" class="w-full h-full object-cover object-center" />
                </div>
              </div>

              <div className='md:pt-8'>
                <p className='text-indigo-500 font-bold text-center md:text-ledt'>Who I am</p>
                <h1 className='text-gray-800 text-2x; sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6'>Our competitive advantage</h1>
                <p className='text-gray-500 sm:text-lg mb-6 md:mb-8'>
                  This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.<br /><br />
                  This is a section of placeholder text. It shares some characteristics of a real written text but is <a href="#" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 underline transition duration-100">random</a> or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.
                </p>
                <h2 className='text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4'>About I am</h2>
                <p className='text-gray-500 sm:text-lg mb-6 md:mb-8'>
                  This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* skills */}
      </div>
    </div>
  )
}

export default App
