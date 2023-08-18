import PropTypes from 'prop-types'
//This button component is created and exported to the header component
//The class btn is a class in the index.css and also applies styles to
//the add button. 
const button = ({ color, text, onClick}) => {
  return (
  <button 
  onClick = {onClick}
  style={{ backgroundColor: color }} 
  className='btn'
  >
  {text}
  </button>)
}

button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

//Enables us to use this button component elsewhere.
export default button
