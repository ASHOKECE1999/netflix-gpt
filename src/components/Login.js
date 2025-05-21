import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignUp,setSignUp]=useState(true)

  const signInhandler=()=>{
    setSignUp(!isSignUp)
  }
  return (
    <div>
        <Header/>
         <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_large.jpg" alt="background"
             />
        </div>
        <form className='absolute bg-opacity-70 bg-black my-36 mx-auto left-0 right-0 w-3/12  flex flex-col items-center p-2 text-white rounded-lg'>
        <h1 className='text-3xl font-bold'>{isSignUp ?"Sign in":"Sign Up"}</h1>
       {!isSignUp && <input type='text' placeholder='Enter Full Name' className=' p-2 m-2 bg-gray-500'/>}
          <input type='text' placeholder='Enter Email AddressHere' className=' p-2 m-2 bg-gray-500'/>
           <input type='password' placeholder='Enter Password' className=' p-2 m-2  bg-gray-500'/>
           <button  className='p-2 m-2 font-black bg-red-700 mb-[30px] rounded-lg'>{isSignUp ?"Sign in":"Sign Up"}</button>
           <p onClick={signInhandler}>{isSignUp ?"are you new to NetFlix?":"are you already existing one Sign In "}</p>
        </form>
    </div>
  )
}

export default Login