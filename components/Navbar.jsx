'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Navbar = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false)

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    // setProviders();
  }, []);

  return (
    <header className='max-w-[1200px] m-auto'>
      <nav className='flex p-4 justify-between'>
        <Link href='/' className='flex items-center flex-row gap-2'>
          <Image
            src='/assets/images/logo.png'
            width={70}
            height={70}
            alt='logo'
            className='object-contain'
          />
          <p className='hidden md:flex items-center flex-row-reverse font-poppins text-xl uppercase font-extrabold gap-2'>
            IdeaForge
          </p>
        </Link>

        {/* Desktop menu */}
        <div className='sm:flex hidden'>
          {isUserLoggedIn ? (
            <div className='flex items-center gap-2 md:gap-4'>
              <Link
                href='/create/prompt'
                className='bg-black font-poppins text-white px-4 py-2 rounded-full border-2 border-black hover:bg-white hover:text-black '>
                + Create Post
              </Link>
              <button
                type='button'
                onClick={signOut}
                className=' font-poppins px-4 py-2 rounded-full bg-white border-2 border-black hover:bg-black hover:text-white '>
                Sign out
              </button>
              <Link
                href='/profile'
                className='rounded-full inline-block border-black border-1'>
                <Image
                  src='/assets/images/profile.png'
                  width={45}
                  height={45}
                  alt='profile'
                  className=' w-11 h-11 p-0.5 object-contain rounded-full ring-2 ring-gray-300 dark:ring-gray-500'
                />
              </Link>
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type='button'
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className=' font-poppins px-4 py-2 rounded-full bg-white border-2 border-black hover:bg-black hover:text-white '>
                    Sign In
                  </button>
                ))}
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex relative '>
          {isUserLoggedIn ? (
            <div className='flex'>
              <Image
                src='/assets/images/profile.png'
                width={65}
                height={65}
                alt='profile'
                className=' w-14 h-14  p-0.5 object-contain rounded-full ring-2 ring-gray-300 dark:ring-gray-500'
                onClick={() => setToggleDropdown((prev) => !prev)}
              />
              {toggleDropdown && (
                <div className='dropdown'>
                  <Link href='/profile' onClick={() => setToggleDropdown(false)}> My Profile</Link>
                  <Link href='/create-prompt' onClick={() => setToggleDropdown(false)}> Create Prompt</Link>
                  <button type='button' className='my-4 mx-auto py-4' onClick={() => { setToggleDropdown(false); signOut }}> Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <>

              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type='button'
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className=' font-poppins px-4 py-2 rounded-full bg-white border-2 border-black hover:bg-black hover:text-white '>
                    Sign In
                  </button>
                ))}
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
