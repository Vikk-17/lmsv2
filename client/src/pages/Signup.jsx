import {useState} from 'react';
import { useAuth } from '../hooks/useAuth';
import { Toaster } from 'react-hot-toast';
function Signup() {
  const {signup,loading,error} =useAuth();
  const [name,setName] =useState();
  const [email,setEmail] =useState();
  const [password,setPassword] =useState();
  const [confirmPassword,setConfirmPassword] =useState();
  const handleSubmit =(e)=>{
    e.preventDefault();
    signup({name,email,password,confirmPassword})
  }
  return (
    <>
      <section id="breadcrumb" className='h-14 bg-[var(--clr-accent-100)]'>
        <nav aria-label='Breadcrumb' className='container flex items-center h-full text-[var(--clr-primary-900)]'>
          <ol className='flex gap-x-1 '>
            <li><a href="/">Home</a></li>
            <li aria-hidden="true">›</li>
            <li><a className='text-[var(--clr-accent-900)]' href="/signup">Sign up</a></li>
          </ol>
        </nav>
      </section>
      <section id='loginform' className='mt-16 mb-40'>
        <div id="form-wrapper" className='container text-[var(--clr-primary-900)]'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-28 items-center'>
            <div className='flex flex-col gap-y-6 w-full md:max-w-[26rem] md:ml-auto'>
              <div>
                <h2>Create Your  Account</h2>
                <p className='text-[var(--clr-primary-400)]'>Join GIR Technologies  and start learning today.</p>
              </div>
              <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
                <input className='border outline-none h-12 rounded-lg px-4 text-gray-600 border-[var(--clr-primary-200)]' name='name' type="text" placeholder='Full Name' onChange={(e)=>setName(e.target.value)} />
                <input className='border outline-none h-12 rounded-lg px-4 text-gray-600 border-[var(--clr-primary-200)]' name='email' type="email" placeholder='Email'  onChange={(e) => setEmail(e.target.value)}  />
                <input className='border outline-none h-12 rounded-lg px-4 text-gray-600 border-[var(--clr-primary-200)] ' name='password' type="password" placeholder='Password'  onChange={(e) => setPassword(e.target.value)} />
                <input className='border outline-none h-12 rounded-lg px-4 text-gray-600 border-[var(--clr-primary-200)] ' name='confirmpassword' type="password" placeholder='Confirm Password'  onChange={(e) => setConfirmPassword(e.target.value)} />
                <div className='flex justify-between items-center'>
                  <label>
                    <input type="checkbox" name="remember" />
                    &nbsp;Remember me
                  </label>
                  <a className='text-[var(--clr-accent-900)]' href="#">Forget Password?</a>
                </div>
                <input className='h-12 rounded-lg text-white px-4 bg-[var(--clr-accent-900)]' type="submit" value="Login" />
                {error && <p>{error}</p>}
              </form>
              <div className='flex items-center gap-x-1 text-[var(--clr-primary-400)] justify-between'>
                <hr className='border-t flex-grow border-[var(--clr-primary-200)]' />
                <span >or continue</span>
                <hr className='border-t flex-grow border-[var(--clr-primary-200)]'  />
              </div>
              <a className='h-12  rounded-lg px-4 border border-[var(--clr-primary-200)] flex items-center justify-center gap-x-2 ' href="#"><img src="/icons/google.svg" alt="" />Log in with google</a>
            </div>
            <div>
              <img src="/images/signupimg.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Toaster position='bottom-left' />
    </>
  )
}

export default Signup