import React,{useState,useEffect} from 'react'


function Counter() {
    const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(10)
    useEffect(()=>{
        console.log('mmounting......')
         console.log('updatting.....'+count)
         console.log('counting.....'+count2)
   
    },[count,count2])
   
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>add</button>
      <h1>hi iam Anurag:{count}</h1>

      <button onClick={()=>setCount2(count2+1)}>add</button>
      <h1>hi iam Anurag:{count2}</h1>
    </div>
  )
}

export default Counter
