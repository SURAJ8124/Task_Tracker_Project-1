import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react'

function App() {
  const [tasks, setTasks]= useState([ {
    id: 1,
    text: 'Doctor Appointment',
    day: 'Feb 5th at 2:30pm',
    remainder: true
},
{
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 2:30pm',
    remainder: true
},
{
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 10th at 2:00pm',
    remainder: false
}])

const addtask=(object)=>{
  const id=Math.floor(Math.random()*10000)+1;
  const newtask={id, ...object}
  setTasks([...tasks, newtask])
  console.log(tasks,"tasks")
}

const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=> task.id !==id))
}

const toggeleReminder=(id)=>{
  setTasks(tasks.map((task)=>task.id===id ? {...task, remainder:!task.remainder}:task))
}
  return (
    <>
      <div className="container">
      <Header title="Task Tracker"/>
      <AddTask onAdd={addtask}/>
      {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggeleReminder}/>:"No more task"}
      </div>
    </>
  );
}

export default App;
