'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'; 
import '../index.css';

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Destination', to: '/Destination' },
  { name: 'Contact', to: '/contact' },
  { name: 'Book', to: '/Book' }, 
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState(false)

  const validSearchTerms = ['nature', 'forest', 'mountain', 'ocean']

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (validSearchTerms.includes(searchTerm.toLowerCase())) {
      setError(false)
      setSearchOpen(false)
      alert(`Searching for: ${searchTerm}`)
    } else {
      setError(true)
    }
  }

  return (
    <div className="bg-transparent">
      <header className="absolute inset-x-0 top-0 z-50 w-full">
      <nav 
  aria-label="Global" 
  className="flex items-center justify-between px-6 lg:px-8 w-full py-3 bg-slate-200"
  style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)' }} // Adding box-shadow
>
  {/* Logo for desktop */}
  <div className="flex lg:flex-1">
    <NavLink to="/" className="-m-1.5 p-3 no-underline">
      <span className="sr-only">Your Company</span>
      <span className="text-3xl font-extrabold text-gray-800 tracking-tight">
        Travel
      </span>
    </NavLink>
  </div>

  {/* Hamburger Icon (Mobile Menu Trigger) */}
  <div className="flex lg:hidden">
    <button
      type="button"
      onClick={() => setMobileMenuOpen(true)}
      className="-m-2.5 inline-flex items-center justify-center p-2.5 text-white" // Removed margin
    >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon aria-hidden="true" className="h-6 w-6" />
    </button>
  </div>

  {/* Desktop Navigation Links */}
  <div className="hidden lg:flex lg:gap-x-12">
    {navigation.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="text-black text-lg font-semibold tracking-wide py-2 px-4 no-underline" // Removed margin
        style={{ fontFamily: "'Poppins', sans-serif" }} // Custom font
      >
        {item.name}
      </NavLink>
    ))}
  </div>

  

  {/* Search Button for Desktop */}
  <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    <button
      onClick={() => setSearchOpen(true)}
      className="text-sm font-semibold text-white hover:text-indigo-600 transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-6 hover:shadow-2xl hover:shadow-indigo-500 focus:outline-none"
    >
      <i
        className="ri-search-line"
        style={{
          fontSize: '1.6rem',
          marginRight: '8px',
          color: 'black',
          transition: 'transform 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
        }}
      ></i>
      {/* Search Icon */}
    </button>
  </div>

</nav>

{/* Search Bar Modal */}
{searchOpen && (
  <div className="search fixed left-0 top-0 w-full h-full z-50 bg-gray-500 bg-opacity-25 backdrop-blur-md">
    <div className="flex justify-center items-center h-full">
      <div className="search__form flex items-center gap-2 bg-white p-4 shadow-md max-w-lg w-full"> {/* Removed margin */}
        <form onSubmit={handleSearchSubmit} className="w-full flex flex-col">
          <input
            type="search"
            name="query"
            placeholder="What are you looking for?"
            className="search__input w-full p-3 border border-gray-300" // Removed margin
            aria-label="Search input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {error && (
            <span className="text-red-500 mt-2">Sorry, no results found for "{searchTerm}".</span>
          )}
          <button
            type="submit"
            className="mt-3 p-2 bg-indigo-600 text-white"
          >
            Search
          </button>
        </form>
        <button
          onClick={() => setSearchOpen(false)}
          className="ri-close-line text-xl cursor-pointer"
          aria-label="Close search"
        />
      </div>
    </div>
  </div>
)}

{/* Mobile Menu */}
<Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
  <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-25" />
  <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    <div className="flex items-center justify-between">
      <button
        type="button"
        onClick={() => setMobileMenuOpen(false)}
        className="-m-2.5 p-2.5 text-gray-700"
      >
        <span className="sr-only">Close menu</span>
        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
      </button>
    </div>
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="-mx-3 block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="py-6">
         
        </div>
      </div>
    </div>
  </DialogPanel>
</Dialog>
</header>
</div>
)
}
