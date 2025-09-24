import React, { useContext, useState } from 'react'
import assets from '../assets/assets'
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-hot-toast'

const LoginPage = () => {
  const [currentSate, setCurrentSate] = useState("Login");;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const { login } = useContext(AuthContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // if (currentSate === "Sign up" && !isDataSubmitted) {
    //   setIsDataSubmitted(true)
    //   return;
    // }

    if (currentSate === "Sign up") {
      if (!fullName.trim()) { toast.error("Full name is required"); return; }
      if (!email.trim()) { toast.error("Email is required"); return; }
      if (!password) { toast.error("Password is required  and missing"); return; }
      if (!bio.trim()) { toast.error("Bio is required"); return; }
    } else {
      if (!email.trim()) { toast.error("Email is required"); return; }
      if (!password) { toast.error("Password is required"); return; }
    }

    let credentials = {};
    if (currentSate === "Sign up") {
      credentials = { fullName, email, password, bio };
    } else {
      credentials = { email, password };
    }
    console.log("DEBUG: submitting credentials ->", credentials)

    login(currentSate === "Sign up" ? 'signup' : 'login', credentials);
  }

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center 
    justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
      <img src={assets.logo_big} alt="" className='w-[min(30vw, 250px)]' />
      <form onSubmit={onSubmitHandler} className='border-2 bg-white/8 text-white border-gray-500 p-6 flex
      flex-col gap-6 rounded-lg shadow-lg'>
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currentSate}
          {isDataSubmitted &&
            <img onClick={() => setIsDataSubmitted(false)} src={assets.arrow_icon} alt="" className="w-5 cursor-pointer" />
          }
        </h2>
        {/* {currentSate === "Sign up" && !isDataSubmitted && (
          <input onChange={(e) => setFullName(e.target.value)}
            value={fullName} type="text" className='p-2 border border-gray-500 rounded-md 
        focus:outline-none' placeholder='Full Name' required />
        )}


        {!isDataSubmitted && (
          <>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email Address" required className="p-2
            border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required className="p-2
            border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </>
        )}

        {
          currentSate === "Sign up" && isDataSubmitted && (
            <textarea onChange={(e) => setBio(e.target.value)} value={bio}
              rows={4} className="p-2 border border-gray-500 rounded-md
            focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder='provide a short bio...' required></textarea>
          )
        }   

        {currentSate === "Sign up" && (
          <>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              placeholder="Full Name"
              required
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
            />
            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              rows={4}
              placeholder="Provide a short bio..."
              required
            ></textarea>
          </>
        )}  */}

        {currentSate === "Sign up" && (
          <>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              className="p-2 border border-gray-500 rounded-md focus:outline-none"
              placeholder="Full Name"
              required
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              rows={4}
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Provide a short bio..."
              required
            ></textarea>
          </>
        )}

        {currentSate === "Login" && (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </>
        )}



        {/* <button type="submit" className="py-3 bg-gradient-to-r from-purple-400
        to-violet-600 text-white rounded-md cursor-pointer">
          {currentSate === "Sign up"
            ? (isDataSubmitted ? "Finish Signup" : "Next")
            : "Login Now"}
        </button>

        <div className='flex items-center gap-2 text-sm text-gray-500'>
          <input type="checkbox" required />
          <p>Agree to the terms and use & privacy policy</p>
        </div>

        <div className="flex">
          {currentSate === "Sign up" ? (
            <p className='text-sm text-gray-600'>Already have an account? <span
              onClick={() => { setCurrentSate("Login"); setIsDataSubmitted(false) }}
              className='font-medium text-violet-500 cursor-pointer'>Login here</span></p>
          ) : (
            <p className='text-sm text-gray-600'>Create an account <span
              onClick={() => { setCurrentSate("Sign up") }}
              className='font-medium text-violet-500 cursor-pointer'>Click here</span></p>
          )}
        </div>   */}

        <button
          type="submit"
          className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer"
        >
          {currentSate === "Sign up" ? "Sign Up" : "Login Now"}
        </button>

        {currentSate === "Sign up" && (
          <div className='flex items-center gap-2 text-sm text-gray-500'>
            <input type="checkbox" required />
            <p>Agree to the terms of use & privacy policy</p>
          </div>
        )}

        <div className="flex">
          {currentSate === "Sign up" ? (
            <p className='text-sm text-gray-600'>
              Already have an account?{" "}
              <span
                onClick={() => setCurrentSate("Login")}
                className='font-medium text-violet-500 cursor-pointer'
              >
                Login here
              </span>
            </p>
          ) : (
            <p className='text-sm text-gray-600'>
              Create an account{" "}
              <span
                onClick={() => setCurrentSate("Sign up")}
                className='font-medium text-violet-500 cursor-pointer'
              >
                Click here
              </span>
            </p>
          )}
        </div>



      </form>
    </div>
  )
}

export default LoginPage