import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
  const [text, setText]= useState("");
  const[day,setDay]=useState("");
  const[reminder,setReminder]=useState(false);


   const onSubmit =(e)=>{
     e.preventDefault();
     if(!text){
      alert('please add a task');
      return
     }
     onAdd({text,day,reminder});
     setText("");
     setDay("");
     setReminder(false);
   }
  
  return (
    <div>
        <form className='add-form' onSubmit={onSubmit}>
         <div className='form-control'>
          <lable>Task</lable>
          <input type='text' placeholder='AddTask' value={text} onChange={(e)=>setText(e.target.value)}/>
         </div>
         <div className='form-control'>
          <lable>Day&Time</lable>
          <input type='text' placeholder='Add Day&Time' value={day} onChange={(e)=>setDay(e.target.value)}/>
         </div>
         <div className='form-control-check input'>
          <lable>Set Reminder</lable>
          <input type='checkbox'  checked={reminder} value={reminder} onClick={(e)=>setReminder(e.currentTarget.checked)}/>
         </div>
         <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    </div>
  )
}

export default AddTask