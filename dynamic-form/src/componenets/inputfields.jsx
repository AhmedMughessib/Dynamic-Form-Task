import { Field } from 'formik';
import { TextField } from '@mui/material';



const InputFeild = ({name, type, label, errors, touched }) => {
return (
  <div>
  <Field
  name={name}
  type={type}
  as={TextField}
  label={label}
  variant="outlined"
  fullWidth
  />
  {errors[name] && touched[name] && <div>{errors[name]}</div>}
  </div>
)

}

export default InputFeild