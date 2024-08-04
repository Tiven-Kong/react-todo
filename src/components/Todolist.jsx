import React from 'react';
import tick from '../assets/tickimg.png';
import deleteimg from '../assets/deleteimg.jpg';

export default function Todolist({text ,deleteimg1 , clickimg  , done}) {
  return (
    <div>
      <div className='items-center flex bg-white relative rounded-2xl mx-3 mt-5'>
        <div className='flex flex-row p-5 gap-7 justify-between items-center'>
          <img
            className='w-10 cursor-pointer'
            src={tick}
            alt="Tick"
            onClick={clickimg}
            
          />
          <p style={{ textDecoration: done ? 'line-through' : 'none'}}> {text} </p>
          <img
            className='w-10 pt-5 h-22 rounded-xl absolute right-7 top-0 cursor-pointer'
            src={deleteimg}
            alt="Delete"
            onClick={deleteimg1}
          />
        </div>
      </div>
    </div>
  );
}
