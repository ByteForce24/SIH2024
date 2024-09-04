import React from 'react'
import logo from '../../assets/logo.png'

const Sidebar = () => {
  return (
    <div className="sidebar-main-container h-screen flex flex-col items-center pt-[20px] gap-y-[70px]  w-[15%] ">
        <div className="sidebar-top-container">
            <img className='w-[150px] flex items-start' src={logo} alt="" />
        </div>
        <div className="sidebar-bottom-container">
            <ul className='flex flex-col gap-y-[20px] '>
                <li className='cursor-pointer hover:bg-[#e5e5e5] w-[200px] p-[5px] rounded-[5px]'>Home</li>
                <li className='cursor-pointer hover:bg-[#e5e5e5] w-[200px] p-[5px] rounded-[5px]'>Feed</li>
                <li className='cursor-pointer hover:bg-[#e5e5e5] w-[200px] p-[5px] rounded-[5px]'>Jobs</li>
                <li className='cursor-pointer hover:bg-[#e5e5e5] w-[200px] p-[5px] rounded-[5px]'>Events</li>
                <li className='cursor-pointer hover:bg-[#e5e5e5] w-[200px] p-[5px] rounded-[5px]'>Calendar</li>
            </ul>
        </div>

    </div>
  )
}

export default Sidebar
