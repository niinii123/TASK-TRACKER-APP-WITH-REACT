//The parameter or prop tasks below is an array in a state called tasks in the App.js
//It is passed via the Task.js component which has been imported and rendered 
//in the App.js file as an argument or prop.

//We import the Task component and use it here
import Task from "./Task"

//Here, the props tasks and onDelete holds items passed from other components specifically the App.js.
//The action onDelete passes down the 
const Tasks = ({ tasks , onDelete }) => {
    return(
    <>
     {tasks.map((task) => (
        <Task key={task.id} task ={task} onDelete = {onDelete} />
     ))} 
    </>
    )
}

export default Tasks