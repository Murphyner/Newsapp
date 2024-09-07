import React, { useEffect, useState } from 'react'
import { useLoginPostMutation } from '../store/api'


function Login() {
    const [login , setLogin] = useState('')
    const [password , setPassword] = useState('')
    const [loginPost , {data}] = useLoginPostMutation()
    
    
    useEffect(() => {
        if (data && data.token) {
            localStorage.setItem("token", data.token)
        }
    }, [data])

    function handleSubmit(e){
        e.preventDefault()
        loginPost({login , password}).then(() => window.location.reload())
    }
  return (
      <div className='flex items-center h-screen login '>
          <div className='cart flex bg-white  flex-col justify-center items-center  drop-shadow-sm rounded-md shadow-custom hover:shadow-custom2  transition-all duration-300 p-2 w-[30%] mx-auto gap-5'>
              <h1 className='font-bold text-xl'>Login</h1>
              <form className='flex gap-3 flex-col' onSubmit={handleSubmit}>
                  <input
                      className='bg-slate-200 p-2 rounded-md placeholder-black placeholder-opacity-50 shadow-custom outline-none transition-all duration-300  focus:shadow-lime-600 shadow-black'
                      type="text"
                      placeholder="Username"
                      value={login}
                      onChange={(e) => setLogin(e.target.value)}
                  />
                  <input
                      className='bg-slate-200 p-2 rounded-md placeholder-black placeholder-opacity-50 shadow-custom outline-none transition-all duration-300  focus:shadow-lime-600 shadow-black'
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className='bg-lime-400 w-[40%] p-1 mx-auto rounded-xl hover:bg-red-600 transition-all duration-300 hover:rounded-full hover:text-white' type="submit" >
                      {/* {loading ? 'Logging in...' : 'Login'} */}
                      Login
                  </button>
              </form>
              {/* {error && <p>{error.error}</p>} */}
          </div>
      </div>
  )
}

export default Login
