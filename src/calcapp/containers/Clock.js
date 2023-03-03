/* import React, { useEffect, useState } from 'react'
const Clock = () => {
    //const [time,setTime]=useState(new Date())
    const [time,setTime] = useState(new Date())
    useEffect(()=>{
        const interval=setInterval(() => {
            setTimeout(new Date())
            
        }, 1000);
        return () => clearInterval(interval) //to avoid m/y leak
    },[])
  return (
    <div className='bg-dark text-warning text-center'>
        <h4> Time Now: {time.toLocaleTimeString()} </h4>

    </div>
  )
}

export default Clock */

import React, { useEffect,useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div className='bg-dark text-warning text-enter'>
            <h4>Time Now : {time.toLocaleTimeString()}</h4>
        </div>
    )
}

export default Clock