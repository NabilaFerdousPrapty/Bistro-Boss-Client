import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/UseAuth';
import Swal from 'sweetalert2';
import UseAxiosCommon from '../../hooks/UseAxiosCommon';

const Login = () => {
  const navigate=useNavigate();
  const axiosCommon=UseAxiosCommon();
  const location=useLocation();
  let to=location.state?.from || '/';
  
  const {signInWithGoogle,setUser,signInWithEmail}=useAuth();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log('Login')
    const form = e.target;
    const email = form.email.value;

    const password = form.password.value;
  //  console.log(email,password);
   signInWithEmail(email,password)
    .then((user)=>{
      Swal.fire({
        title: 'Logged in successfully',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Ok'
      })
      setUser(user);
     
      // console.log(user);
      navigate(to);
    }).catch((error)=>{
     Swal.fire({

        title: 'Failed to login',
        icon: 'error',
        text:`${error.message}`,
        showCancelButton: false,
        confirmButtonText: 'Ok'
      })
      // console.log(error);
    }
    )

  };
  const handleGoogleLogin=()=>{
    signInWithGoogle()
    .then((result)=>{
      
      const userInfo={name:result.user.displayName, email:result.user.email}
      setUser(result.user);
      axiosCommon.post("/users", userInfo)
      .then((response) => {
        if (response.data.insertedId) {
          console.log("User Created Successfully");
        }
    })
     Swal.fire({
        title: 'Logged in successfully',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Ok'
      })
      // console.log(result);
      navigate(to)}
    )
    .catch((error)=>{
      Swal.fire({

        title: 'Failed to login',
        icon: 'error',
        text:`${error.message}`,
        showCancelButton: false,
        confirmButtonText: 'Ok'
      })
    })
  }

  const capchaRef=useRef(null);
  const [loginDisabled,setLoginDisabled]=useState(true);
  const disabledButton='bg-gray-500 px-6 py-3 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform  rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50';
  const enabledButton='bg-[#D1A054] px-6 py-3 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform  rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50';
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  
  const handleValidateCaptcha=()=>{
    const captcha=capchaRef.current.value;
    // console.log(captcha);
    const result=validateCaptcha(captcha);
    // console.log(result);
    if(result){
      toast.success('Captcha is valid');
      setLoginDisabled(false);
      
    }else{
      toast.error('Captcha is invalid');
      setLoginDisabled(true);
    }
    
  }
  
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="flex  w-full max-w-sm mx-auto overflow-hidden  rounded-lg shadow-lg  lg:max-w-7xl ">
      <div
        className="hidden bg-cover lg:block lg:w-1/2"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        

        <h2 className="mt-3 text-xl text-center font-bold">
        Login
        </h2>

        <button 
        onClick={handleGoogleLogin}
          className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg  hover:bg-gray-50 w-full"
        >
          <div className="px-4 py-2">
            <svg className="w-6 h-6" viewBox="0 0 40 40">
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#FFC107"
              />
              <path
                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                fill="#FF3D00"
              />
              <path
                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                fill="#4CAF50"
              />
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#1976D2"
              />
            </svg>
          </div>

          <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
        </button>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b  lg:w-1/4"></span>

          <a
            href="#"
            className="text-xs text-center  uppercase dark:text-gray-400 hover:underline"
          >
            or login with email
          </a>

          <span className="w-1/5 border-b  lg:w-1/4"></span>
        </div>

       <form  onSubmit={handleLogin}>
       <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 "
            htmlFor="LoggingEmailAddress"
          >
            Email Address
          </label>
          <input
          name='email'
            id="LoggingEmailAddress"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
          />
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="loggingPassword"
            >
              Password
            </label>
            <a
              href="#"
              className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
            >
              Forget Password?
            </a>
          </div>

          <input
          name='password'
            id="loggingPassword"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg ] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
          />
        </div>
        <div className="">
          <div className="flex justify-between">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="loggingPassword"
            >
             <LoadCanvasTemplate />
            </label>
           
          </div>

          <input
          name='captcha' onBlur={handleValidateCaptcha}
            id="captcha" ref={capchaRef}
            placeholder='Enter Captcha'
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg ] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
          />
          {/* <button onClick={handleValidateCaptcha} className="btn btn-xs btn-outline w-full mt-2">
            validate Captcha
          </button> */}
        </div>
        <div className="mt-6">
          <button className={`w-full ${loginDisabled ?  disabledButton :enabledButton  }  `} type='submit' disabled={loginDisabled}>
            Sign In 
          </button>
        </div>

       </form>

       
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b  md:w-1/4"></span>

          <Link
            to={'/signUp'}
            className="text-xs uppercase dark:text-gray-400 hover:underline"
          >
            or sign up
          </Link>

          <span className="w-1/5 border-b  md:w-1/4"></span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
