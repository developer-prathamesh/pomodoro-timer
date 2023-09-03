import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './config'
import { useState,useEffect } from 'react'
import Home from '../Home';
function SignIn() {
    const [signin, setSignIn] = useState('');
    const handleSignIn = () => {
        signInWithPopup(auth,provider).then(data => {
            setSignIn(data.user.email)
            localStorage.setItem('email', data.user.email)
            localStorage.setItem('name',data.user.displayName)
        })
    }

    useEffect(() => {
        setSignIn(localStorage.getItem('email'))
    }, [])

    return (
        <div className='flex justify-center items-center w-[100vw] h-full font-[montserrat]'>
            {signin ? <Home name={localStorage.getItem('name')}></Home> :
                <button className='bg-sky-200 py-3 px-6' onClick={handleSignIn}>Sign In with Google</button>
            }
        </div>
    )
}

export default SignIn
