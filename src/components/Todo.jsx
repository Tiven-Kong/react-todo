import React, { useState } from 'react';
import Todolist from './Todolist';

export default function Todo() {
  const [input , setinput] = useState("")
  const [task , settask]=useState([])
 
  const Add = ()=>{
   if(input !== ""){
    settask([...task, { input: input, done: false }]);

   setinput("")
   
   }


  }
 
  const remove =(index)=>{
   settask(task.filter((_ , i)=>i!==index))

  }

  const already = (index)=>{

    const newone = task.map((task , i)=>
        i==index? {...task , done:!task.done}:task 
    

    )
  settask(newone) ; 
  };
     
    
    
  

  return (
    <>
      <div className='flex justify-center items-center h-screen w-screen'>
        <div className='text-center w-[50vh] h-[70vh] bg-green-300 rounded-2xl'>
          <h1 className='text-white font-bold pt-10'>TODO LIST</h1>

          {/* Input Box */}
          <div className='max-w-full mt-14 items-center'>
            <input
              value={input}
              type="text"
              className='w-[300px] text-center rounded-md'
              placeholder='Add your task'
              onChange={(e)=>setinput(e.target.value)}
            />
            <button className='bg-black w-24 text-blue-300 h-8 ml-4 rounded-md' onClick={Add}>Add</button>
          </div>

          {/* Todo List */}
          {task.map((task, index)=>
          <Todolist key={index} text={task.input} deleteimg1={()=>remove(index) } clickimg={()=>already(index)} done={task.done}/>)}
         
          
        </div>
      </div>
    </>
  );
}
