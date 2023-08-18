import { useState } from 'react'
import Header from './components/Header' 
import Tasks from './components/Tasks';
import AddTasks from './components/AddTasks';

function App() {
//The Add button on the app is supposed to toggle on and off to display the AddTask form component
//And to do that, the need to be a state to handle the toggling.
//NB: THE STATES NAME IS THE showAddTask and the setShowAddTask IS THE FUNCTION THAT HANDLES THE 
//showAddTask STATE IN THE DOM.
//So the form with the input field visibility will depend on on this showAddTask state.
const [showAddTask, setShowAddTask] = useState(false)



 //This block of code is the state called tasks which has some default tasks derived
//NB: PUTTING THIS STATE IN THE APP.JS COMPONENT MAKES IT ACCESSIBLE BY ALL OTHER COMPONENTS
//from an array.When the state changes the component changes as well.
//The set function updates the state
//Remember,a state is basically an object
//Unlike an ordinary array where you can use arrayname.push to add items, a state 
//with an array as seen below can allow new array items to be added or deleted using 
//the set function as seen here as setTasks
  const [tasks, setTasks] = useState([
    {
     id: 1,
     text: 'Doctors Appointment',
     day: 'Feb 5th at 2:30pm',
     reminder: true,
    },
    {
     id: 2,
     text: 'Meeting at School',
     day: 'Feb 6th at 1:30pm',
     reminder: true
    },
    {
     id: 3,
     text: 'Food Shopping',
     day: 'Feb 7th at 5:00pm',
     reminder: false
    }
  ]) 

  //The addTask function below is responsible for adding new tasks.
  //It will be called by the onAdd prop in the AddTask component within
  //the App.js render method 
  const addTask = (task) => {
    //The line below generates a random number and stores it in the variable id.
     const id = Math.floor(Math.random() * 10000) + 1
    /*The object below stores the id generated above and the new task entered by the user
    and stored as task*/
     const newTask = {id, ...task}
    //The setTask is then used to render the new task and the old tasks to the DOM.
     setTasks([...tasks, newTask])
  }

  /*The function below deletes tasks by on their id's when the times icon 
  in the Task.js component is triggered
  In the line of code " setTasks(tasks.filter(()=> tasks.id !== id))" below the setTasks, 
  grabs the tasks in the state above, then uses the filter method to loop through the tasks in the state 
  and displays to the tasks, whose id's are still in the task state after a particular task with a
  particular id is deleted in the DOM
  Note that the task parameter her is from the Task.js component*/
  const deleteTask = (id) => {
     setTasks(tasks.filter((task)=> task.id !== id))
    }

  return (
    //The class 'container' is used to style the content within 
    //the div tag below.
    //Since the Task.js component is being used in the Tasks.js component,
    //When can place an event listener called onDelete inside the Tasks tag below
    //Which calls the deleteTask function when a task is deleted,
    //The line " {tasks.length > 0 ? (<Tasks tasks = { tasks } onDelete = {deleteTask} />) : ('No Tasks To Show')}"
    //If there's are no tasks to be completed a simple message "No Tasks To Show Should be displayed"

    //The component AddTasks placed in the braces below simply means that, if the value of the 
    //showAddTask state is true then the component AddTasks will be displayed for the user to add 
    //new tasks.

    //The event listerner onAdd in the Header tag runs a function which reverses the default value of the 
    //showAddTask state which further results in the toggling of the AddTask form component when the Add 
    //button is clicked.
    //The onAdd must be placed in the header function in the Header.js file as a prop
    <div className="container">
       <Header onAdd={() => {setShowAddTask(!showAddTask)}} showAdd={showAddTask}/>
       {showAddTask && <AddTasks onAdd={addTask}/>}
       {tasks.length > 0 ? (<Tasks tasks = { tasks } onDelete = {deleteTask} />) : ('No Tasks To Show')}
    </div>
  );
}

export default App;
