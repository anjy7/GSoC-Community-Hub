// 'use client';
import React from 'react';
import Image from 'next/image';
const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow-lg'>
      <div className='mx-auto max-w-6xl px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-7'>
            <div>
              <a
                href='/'
                className='flex items-center px-2 py-4'
              >
                <Image
                  src='/logo.svg'
                  width={200}
                  height={200}
                  alt='Picture of the author'
                />
                {/* <span className="font-semibold text-gray-500 text-lg">Your Brand</span> */}
              </a>
            </div>
          </div>
          <div className='hidden items-center space-x-1 md:flex'>
            <div className='group relative'>
              <button className='px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-green-500'>
                Events
              </button>
              <div className='absolute mt-1 hidden rounded-md border bg-white group-hover:block'>
                <a
                  href='/events'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-56 text-center'
                >
                  GSoC Alumni Summit
                </a>
                <a
                  href='/events'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-56 text-center'
                >
                  Apps Workshop
                </a>
                <a
                  href='/events'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-56 text-center'
                >
                  GSoC Demo Day
                </a>
              </div>
            </div>
            {/* <a
              href='#'
              className='px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-green-500'
            >
              About
            </a>
            <a
              href='#'
              className='px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-green-500'
            >
              Contact
            </a> */}
          </div>
          {/* <div className='flex items-center md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='mobile-menu-button outline-none'
            >
              <svg
                className='h-6 w-6 text-gray-500 hover:text-green-500'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </button>
          </div> */}
        </div>
      </div>
      {/* {isOpen && (
        <div className="mobile-menu md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Products</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">About</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
