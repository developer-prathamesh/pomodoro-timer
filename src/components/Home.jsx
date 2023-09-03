import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Toggle from './toggle/Toggle';

function Home({ name }) {
    const [toggled,setToggle] = useState(false);
    const [seconds,setSeconds] = useState(0);
    const [minutes,setMinutes] = useState(25);
    const [breakTime,setBreak] = useState(false);
    const [start,setStart] = useState(false);
    
    useEffect(()=>{
        let timer = setInterval(()=>{
            clearInterval(timer)
            if(start){
                if(seconds===0){
                    if(minutes!==0){
                        setSeconds(59)
                        setMinutes(minutes-1)
                    }else{
                        let minutes = breakTime ? 24:4;
                        let seconds = 59;
    
                        setSeconds(seconds)
                        setMinutes(minutes)
                        setBreak(!breakTime);
                    }
                }else{
                    setSeconds(seconds-1)
                }
            }
            
        },1000)
    },[seconds,start])

    const handleClick=()=>{
        setToggle(s=>!s)
    }
    const handleStart = ()=>{
        setStart(!start)
    }

    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }
    const handleReset=()=>{
        setSeconds(0);
        setMinutes(25);
        setStart(false)
        
    }
    return (
       <div className={`h-[100vh] w-[100vw] font-[montserrat] ${toggled ? 'night':'day'} overflow-hidden`}>
            <div className='flex justify-between w-[90%] m-auto items-center'>
                <p className='mt-4 md:text-sm lg:text-xl'>Welcome Home {name}</p>
                <button className='bg-transparent mt-4 outline-none p-4' onClick={handleLogout}>Log Out</button>
            </div>
            <div className='w-full h-full flex flex-col items-center mt-8'>
                <div className='justify-center flex'>
                    {breakTime && <p> Break Time ! Timer Starts In</p>}
                </div>
                <div className='flex justify-center'>
                    
                    {
                        breakTime ? <p>{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</p> :
                    
                        <div className='h-[200px] w-[400px] flex flex-col items-center justify-between'>
                            <p className='text-center mt-6 text-2xl'>{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</p>
                            <div className='mb-6'>

                                <button className='mr-5 px-4 py-2 text-black' onClick={handleStart}>{start?"Pause":"Start"}</button>
                                <button className='px-4 py-2 text-black' onClick={handleReset}>Reset</button>
                            </div>
                        </div>
                    }
                </div>
                <div className='mt-6'>
                    <Toggle toggled={toggled} onClick={handleClick}></Toggle>
                </div>

            </div>
       </div>
    )
}

export default Home
