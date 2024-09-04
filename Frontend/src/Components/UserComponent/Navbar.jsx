import React from 'react'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div class="navbar flex items-center bg-white p-[15px]  justify-between shadow-xl max-md:gap-x-[100px] w-full  max-mb: pl-[50px] pr-[50px] max-ms:p-0 fixed z-[100]">

        <div class="left flex hover:scale-125 transition cursor-pointer">
            <img src={logo} alt="" class="logo w-[100px]"/>
        </div>

        <div class="right flex gap-x-[50px]  items-center">
            <div class="navlinks1 max-md:hidden">
                <ul class="flex text-black  gap-x-[40px]">
                    <li class=" hover:text-gray-600 cursor-pointer justify-end border-b-[2px] border-transparent hover:border-black">Home</li>
                    <li class=" hover:text-gray-600 cursor-pointer justify-end border-b-[2px] border-transparent hover:border-black">Platform</li>
                    <li class=" hover:text-gray-600 cursor-pointer justify-end border-b-[2px] border-transparent hover:border-black">Alumini</li>
                    <li class=" hover:text-gray-600 cursor-pointer justify-end border-b-[2px] border-transparent hover:border-black">About</li>
                </ul>
            </div>

            <div class="navlinks2">
                <ul class="flex text-black ">
                    <li class=" pt-[5px] pb-[5px] hover:bg-blue-300 transition-colors cursor-pointer justify-end bg-blue-200 px-4 rounded-xl w-[90px] font-medium">
                        Sign Up</li>
                </ul>
            </div>


        </div>

    </div>
  )
}

export default Navbar
