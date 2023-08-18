import PropTypes from 'prop-types'
//The import statement below imports the button component and renders
//it together with the title prop in the header
////When this function runs it returns whatever is within 
//the header tag to the App.js which is then rendered to the DOM.
//So here all the codes goes within the header tag.
//NB: ANY TIME A COMPONENT IS IMPORTED INTO ANOTHER COMPONENT OR THE APP.JS
//COMPONENT, IT HAS TO BE INCLUDED IN WHATEVER PARENT TAG WITHIN THE RETURN METHOD.
import Button from './Button'


//Props enables us to pass in data to the component
//In this example title is the prop.
//After the title a button is created which adds tasks when clicked.
//The header tag has a class of header which is a class in the index.css
//It makes the header a flex container
 
//Here, the color and text are more like arguments which are passed 
//into the props/parameters in the button.js component

//The onAdd prop is then passed as function which runs when the Button is click. 
//The showAdd prop holds a true or false value, if the form is visible it displays 
//close of the button, if it's not visible it displays add on the button.
//Also if the form is visible it makes the button's color add w
const Header = ({title, onAdd, showAdd }) => {

  return (
    <header className ='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'blue' : 'orange'} text={showAdd ? 'Close' : 'Add Task'} onClick={onAdd} />
    </header>
  )
}

//This set 'Task Tracker' has the default value of the title prop 
Header.defaultProps = {
    title: 'Task Tracker',
}
/*
const headerStyle = {
  color:'whitesmoke', 
  backgroundColor: 'black'
}
*/

//This ensures that the data type of the prop which is title in this case
//is a string and must be required as well.

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
