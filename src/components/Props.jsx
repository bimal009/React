import React from 'react'


const Hobbies=({title})=>{
   return(

       <h2>{title}</h2>
   ) 
}
const Props = () => {
  return (
    <div className='text-black font-bold flex text-center gap-5 flex-col mt-10 '>
      <Hobbies title="Movies"/>
      <Hobbies title="Games"/>
      <Hobbies title="Reading"/>
      <Hobbies title="Blogs"/>
    </div>
  )
}

export default Props
