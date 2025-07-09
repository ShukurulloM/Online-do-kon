import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='py-6 bg-teal-600'>
      <div className='w-full max-w-6xl px-5 mx-auto flex justify-between items-center'>
        <Link className='text-3xl font-semibold' to="/">MyStore</Link>
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className='hidden lg:flex gap-6 text-white text-2xl font-medium'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
      {open && (
        <nav className="flex flex-col gap-3 mt-4 lg:hidden text-white text-xl pl-5 font-medium">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  )
}

export default Header