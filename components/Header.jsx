import React from 'react'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-7xl mx-auto'>
      <ul className='flex gap-4'>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link className='border rounded-2xl border-amber-500 px-4 py-1 text-amber-500
           font-semibold hover:bg-amber-500 hover:text-white transition-colors duration-300' href="/sign-in">Sign In</Link>
        </SignedOut>
        <li>
          <Link href="/">Home</Link>
        </li> 
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <div className='flex items-center gap-4'>
        <DarkModeSwitch />
      <Link href={'/'} className='flex gap-1 items-center'>
        <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>
          IMDb
        </span>
        <span className='text-xl hidden sm:inline'>Clone</span>
      </Link>
     
         
    </div>
  </div>
  )
}

