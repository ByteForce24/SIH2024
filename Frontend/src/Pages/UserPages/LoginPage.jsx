import React from 'react'
import img1 from '../../assets/LoginImg.png'
import Navbar from '../../Components/UserComponent/Navbar'

const LoginPage = () => {
  return (
    <>
    <Navbar />
    <div className="login-main-container flex w-full h-screen p-[30px]  ">
        <div className="login-left-container flex flex-col justify-center items-center  w-[50%] gap-y-[30px] h-screen pl-[0px] pr-[0px] max-md: w-full">
            <div className="login-top-container"><p className='text-[50px] font-semibold max-md:text-[30px]'>Connected by education, <br/> grow together.</p></div>
            <div className="login-middle-container flex gap-x-[60px]">
                <div className='flex flex-col gap-y-[30px]'>
                    <img className='w-[200px]' src={img1} alt="" />
                    <img className='w-[200px]' src={img1} alt="" />
                </div>
                <div className='flex flex-col gap-y-[20px]'>
                    <img className='w-[200px]' src={img1} alt="" />
                    <img className='w-[200px]' src={img1} alt="" />
                </div>
            </div>
            <div className="login-bottom-container"><p className='text-[30px] max-md:text[10px]'>रिश्तों की डोर, सफलता का सफर</p></div>
        </div>



        <div className="login-right-container flex w-[50%] h-screen items-center justify-center bg-[#003366] p-[50px] max-md: w-full  ">
            <form action="" className='flex flex-col gap-y-[30px] bg-white p-[30px] rounded-[15px] drop-shadow-2xl'>
                <div className="formfild1">
                    <p className='text-[40px] font-medium'>Started your 
                    journey with us </p>
                </div>
                <div className="formfild2 flex flex-col gap-y-[40px]">
                    <div className='flex flex-col gap-y-[10px]'>
                        <label htmlFor="" className='font-medium'>Collage Name</label>
                        <input className=' h-[40px] p-[10px] font-medium bg-[#e5e5e5] rounded-[10px]' type="text" />
                    </div>
                    <div className='flex flex-col gap-y-[10px]'>
                        <label htmlFor="" className='font-medium'>Email</label>
                        <input className=' h-[40px] p-[10px] font-medium bg-[#e5e5e5] rounded-[10px]' type="text" />
                    </div>
                    <div className='flex flex-col gap-y-[10px]'>
                        <label htmlFor="" className='font-medium'>Password</label>
                        <input className=' h-[40px] p-[10px] font-medium bg-[#e5e5e5] rounded-[10px]' type="text" />
                    </div>
                    <div className='flex justify-between'>
                    <a href="" className='border-b-[1px] border-black'>Remember me</a>
                    <a href="" className='border-b-[1px] border-black'>Forgot Password?</a>
                    </div>
                </div>
                <div className="formfild3 flex flex-col items-center gap-y-[20px] ">
                    <button className='bg-black text-white w-[300px] p-[10px] rounded-[10px]'>Or sign in with Google</button>
                    <a href="" className='border-b-[1px] border-black'>Don’t have an account</a>
                </div>
            </form>
        </div>
    </div>
    </>

  )
}

export default LoginPage
