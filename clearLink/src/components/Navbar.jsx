import React from 'react'
import imgaeURL from '../../src/images/backgroundpattern-c0621009.png'

const Navbar = () => {
  return (
    <>
        <div className="navbar font-semibold text-slate-600 flex space-x-[12rem] mt-[1rem] justify-center bg-gray-200 rounded-full ">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none"><path d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z" fill="#1570EF"></path><path d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z" fill="#53B1FD"></path></svg>
    <a className="btn btn-ghost text-2xl font-bold">ClearLink</a>
  </div>
  <div className="navbar-center hidden lg:flex text-xl">
    <ul className="menu menu-horizontal px-1">
      {/* <li><a>Item 1</a></li> */}
      <li>
        <details>
          <summary>Products</summary>
          <ul className="p-2">
            {/* <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li> */}
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Solutions</summary>
          <ul className="p-2">
            {/* <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li> */}
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Resources</summary>
          <ul className="p-2">
            {/* <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li> */}
          </ul>
        </details>
      </li>
      <li><a>Pricing</a></li>
    </ul>
  </div>
  <div className="">
    <a className="btn mx-2 rounded-full">Talk to sales</a>
    <a className="btn btn-primary rounded-full">Sign up for free</a>
  </div>
</div>
    </>
  )
}

export default Navbar