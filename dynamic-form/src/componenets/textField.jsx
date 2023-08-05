import { TextField } from '@mui/material';
import {useState} from 'react'

const UpdatedTextField = ({customProp}) => {
  const [values, errors, name] = customProp;

  const [newColor, setNewColor] = useState('success')

  let color = 'secondary';

  const handleChange = () => {
    if (errors[name]) {
      setNewColor('error')
    }
    if (!errors[name] && values[name]) {
      setNewColor('success')
    }
  }

return (
  <div>
  
  < TextField 
  color={newColor}
  onChange={handleChange}
  />
  </div>
  
)
}

export default UpdatedTextField