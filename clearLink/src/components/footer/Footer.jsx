import React from 'react'
import image1 from '../../images/app store image.png'
import image2 from '../../images/google play image.png'
import { LuLinkedin, LuTwitter, LuFacebook, LuInstagram, LuGithub, LuYoutube } from "react-icons/lu";
const Footer = () => {
  return (
    <div>
        <section className="flex gap-[3rem] my-[5rem] mx-[2rem]">
        <div className="w-[30%]">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none"><path d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z" fill="#1570EF"></path><path d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z" fill="#53B1FD"></path></svg>
            <a className="btn btn-ghost text-2xl font-bold">ClearLink</a>
          </div>
            <p className="leading-relaxed text-gray-500 text-base my-6">ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</p>
        </div>
        <div className="flex gap-[8rem]">
          <div>
            <p className='text-slate-500 py-3 font-semibold text-lg'>Product</p>
            <ul className='flex flex-col space-y-3 text-black font-semibold'>
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Tutorials</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <p className='text-slate-500 py-3 font-semibold text-lg'>Company</p>
            <ul className='flex flex-col space-y-3 text-black font-semibold'>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className='text-slate-500 py-3 font-semibold text-lg'>Resources</p>
            <ul className='flex flex-col space-y-3 text-black font-semibold'>
              <li>Blog</li>
              <li>Events</li>
              <li>Help Center</li>
              <li>Tutorials</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <p className='text-slate-500 py-3 font-semibold text-lg'>Resources</p>
            <ul className='flex flex-col space-y-3 text-black font-semibold'>
              <li>Blog</li>
              <li>Events</li>
              <li>Help Center</li>
              <li>Tutorials</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div className=''>
          <p className='font-bold text-blue-600'>Get the app</p>
          <img src={image1} alt=""  className='my-3'/>
          <img src={image2} alt="" />
        </div>
      </section>
    <section className='flex justify-between mt-[5rem] px-10 py-8 bg-slate-100'>
        <p>&copy; 2023 ClearLink. All rights reserved.</p>
        <div>
            <span className='flex gap-5'>
                <LuLinkedin className='text-slate-500'/>
                <LuTwitter/>
                <LuFacebook/>
                <LuInstagram/>
                <LuGithub/>
                <LuYoutube/>
            </span>
        </div>
    </section>
    </div>
  )
}

export default Footer