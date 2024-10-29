'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const isLoggedIn = false; 
  const router = useRouter();

  const handleSignIn=()=>{
     router.push('/auth/signIn')
  }
  const handleSignUp=()=>{
     router.push('/auth/signUp')
  }
 
  
  return (
    <div className="w-full h-20 bg-slate-800 flex items-center justify-between px-8 shadow-md">
      <h1 className="text-3xl text-orange-300 font-bold">
        Bookworm
      </h1>

      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
        <>
        <button className="bg-orange-300 text-slate-900 px-4 py-1 rounded hover:bg-orange-400 transition">
          Sign Out
        </button>
        </>
        ) : (
          <>
            <button onClick={handleSignIn} className="bg-orange-300 text-slate-900 px-4 py-1 rounded hover:bg-orange-400 transition">
              Sign In
            </button>
            <button onClick={handleSignUp} className="bg-orange-300 text-slate-900 px-4 py-1 rounded hover:bg-orange-400 transition">
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

