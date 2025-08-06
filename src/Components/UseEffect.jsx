import React, { use } from 'react'
import  { useEffect } from 'react';

const UseEffect = () => {
    useEffect(()=>{
        console.log("the compound mounted");
    },[]);
  return (
    <div>UseEffect</div>
  )
}

export default UseEffect