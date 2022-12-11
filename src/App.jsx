import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12'>
      <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <header className='flex justify-between items-center py-4 md:py-8 mb-8 md:mb-12 xl:mb-16'>
          {/* logo */}
          <a href="#" className='inline-flex items-center text-block-800 text-2xl md:text-3xl font-bold gap-2.5' aria-label='logo'>Kohta</a>

          {/* nav */}
          <nav className='hidden lg:flex gap-12'>
            <a href="#" className='text-indigo-500 text-lg font-semibold'>Home</a>
            <a href="#" className='text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transirion duraition-100'>About</a>
            <a href="#" className='text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transirion duraition-100'>Skills</a>
            <a href="#" className='text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transirion duraition-100'>Blog</a>
            <a href="#" className='text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transirion duraition-100'>Work</a>
            <a href="#" className='text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transirion duraition-100'>Contact</a>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default App
