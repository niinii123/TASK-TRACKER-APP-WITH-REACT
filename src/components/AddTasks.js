//The input fields must have their own state so that when data is added 
//through the fields, Then can be grabbed and displayed among the list
//of tasks.
import { useState } from "react"
//The add-form class is a css class within the index.css file
//It adds styling the the form
//Same applies to the form-control class used below
//The onAdd prop used below is just the addTask function passed from the App.js
const AddTasks = ({ onAdd }) => {
    //These two lines of code are just states of the input fields in the DOM
    const [text, setText] = useState('')
    const [day, setDay] = useState('')

    const onSubmit = (e) => {
      e.preventDefault()
      
      //If the user leaves the task or text field empty, he is prompted to add a task.
      if(!text){
         alert("Please add task")
         return
      }

      //If the user adds task without any leaving the text field empty, then the onAdd 
      //prop which on the addTask function is called and the values entered by the user
      //are passed through it as arguments.
      onAdd({text, day })
      
      //After the task and the day is added, the input fields are cleared by setting them
      //to empty.
      setText('')
      setDay('')
    }

  return (
   //
    <form className="add-form" onSubmit={onSubmit}>
       <div className="form-control">
          <label>Task</label>
          <input type="text" placeholder="Add task" value={text} onChange={(e => {setText(e.target.value)})}/>
       </div> 
       <div className="form-control">
          <label>Day & Time </label>
          <input type="text" placeholder="Add Day & Time" value={day} onChange={(e => {setDay(e.target.value)})}/>
       </div> 
       <input type='submit' value='Save Task' className="btn btn-block"/>
    </form>
  )
}

export default AddTasks
