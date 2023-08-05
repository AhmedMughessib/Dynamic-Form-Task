import { Field, ErrorMessage } from 'formik';
import './dynamicForm.css'
import UpdatedTextField from './textField';
import { TextField  } from '@mui/material';









const InputFeild = ({name, type, label, errors, touched, values, previusElement }) => {
return (
  <div className='input'>
                {(values[previusElement] || name ==='email' ) && (touched[previusElement] || name ==='email' ) && (!errors[previusElement] || name ==='email'  ) && (
            
            <div>
  <Field
  name={name}
  type={type}
  label={label}
  as={TextField}
  variant="outlined"
  fullWidth
  customProp={[values, errors, name]}

  />
  <ErrorMessage name={name} component="div" style={{ color: 'red', fontSize: 'small' }} />
  </div>
   )} 
  </div>
)

}

export default InputFeild