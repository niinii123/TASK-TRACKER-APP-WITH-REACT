//The icon Fatimes is the x or cancel icon which we import from the react-icons.fa library.
import { FaTimes } from 'react-icons/fa'
//We grab the task state array from the App.js component via the prop task as seen below
//and get the task.text and task.day objects out and display it in the h3 below
//We included a style property inside the Fatimes tag to give the icon a red color

//Here, the props task and onDelete holds items passed from other components specifically the App.js and the Tasks.js
//When the times icon a specific task is clicked, the deleteTasks function in the App.js file 
//is triggered and causes the task to be deleted from amongst the list of tasks.
const Task = ({ task, onDelete }) => {
  return (
    <div className='task'>
        <h3>
          {task.text} <FaTimes style={{ color: 'red', cursor: 'pointer'}} onClick={()=> onDelete(task.id)}/>
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task
