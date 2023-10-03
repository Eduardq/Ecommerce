import React from 'react'
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../redux/bazarSlice';

const Login = () => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const auth = getAuth()
        const provider = new GoogleAuthProvider();
        const handleGoogleLogin =(e)=>{
            e.preventDefault();
            signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    dispatch(addUser({
        _id: user.uid,
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
    }))
    setTimeout(()=>{
        navigate('/')
    },1500)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    console.log(error)
  });
    }      
    
    const handleSignOut = () =>{
        signOut(auth).then(() => {
            toast.success('Log Out Successfully')
            dispatch(removeUser())
        })
        .catch((error) => {
            console.log(error)
        })
    }    
  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
        <div className='w-full flex items-center justify-center gap-10'>
            <div onClick={handleGoogleLogin} className='text-abse w-60 h-12 tracking-wide border-[1px] border-gray-400
            rounded-md flex items-center justify-center gap-2 hover:border-blue-600 
            cursor-pointer duration-300'>
                <img className='w-8' src='data:image/png;base64,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' alt='' />
                <span className='text-sm text-gray-900'>Sign in with google</span>
            </div>
            <button onClick={handleSignOut} className='bg-black text-white text-base py-3 px-8 tracking-wide
            rounded-md hover:bg-gray-800 duration-300'>
                Sign out
            </button>
        </div>
        <div className='w-full flex items-center justify-center gap-10'>
            <div className='text-abse w-60 h-12 tracking-wide border-[1px] border-gray-400
            rounded-md flex items-center justify-center gap-2 hover:border-blue-600 
            cursor-pointer duration-300'>
                <img className='w-8' src='data:image/png;base64,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' alt='' />
                <span className='text-sm text-gray-900'>Sign in with Github</span>
            </div>
            <button className='bg-black text-white text-base py-3 px-8 tracking-wide
            rounded-md hover:bg-gray-800 duration-300'>
                Sign out
            </button>
        </div>
        <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
        />
    </div>
  )
}

export default Login