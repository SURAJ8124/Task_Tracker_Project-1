import React from 'react'

const AddTask = () => {
  return (
    <div>
        <form className='add-form'>
         <div className='form-control'>
          <lable>Task</lable>
          <input type='text' placeholder='AddTask'/>
         </div>
         <div className='form-control'>
          <lable>Day&Time</lable>
          <input type='text' placeholder='Add Day&Time'/>
         </div>
         <div className='form-control-check input'>
          <lable>Set Reminder</lable>
          <input type='checkbox' placeholder='Add Day&Time'/>
         </div>
         <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    </div>
  )
}

export default AddTask