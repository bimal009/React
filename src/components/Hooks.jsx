import React,{useEffect, useState} from 'react'


const Hobbies=({title})=>{
    const [hasLiked, setHasLiked] = useState(false)
    const [Count, setCount ] = useState(0)
    useEffect(() => {
      console.log(`${title} has been Clicked `)
    },[hasLiked]);
    
    return(
        <>
        <div onClick={()=>setCount((prev)=>prev+1)} className='flex justify-center flex-col items-center'>

       <h2 className='px-10 py-10 bg-slate-200 border border-black border-2'>{title}
       {Count || null}

       <button className='bg-gray-300 text-black px-3 py-1 flex rounded-md w-fit hover:bg-slate-400' onClick={()=>setHasLiked(!hasLiked)} >{hasLiked?"liked":"like"}</button>
       </h2>
        </div>
</>
   ) 
}
const Hooks = () => {
  return (
    <div  className='text-black font-bold flex text-center gap-5 flex-col'>
      <Hobbies title="Movies"/>
      <Hobbies title="Games"/>
      <Hobbies title="Reading"/>
      <Hobbies title="Blogs"/>
    </div>
  )
}

export default Hooks
