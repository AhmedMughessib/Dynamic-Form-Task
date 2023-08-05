import { Field } from 'formik';
import { Select, MenuItem } from '@mui/material';

const GenderInput = ({touched,errors, values, previusElement }) => {
  return (
    <div>
      {(values[previusElement] ) && (touched[previusElement] ) && (!errors[previusElement] ) && (
        <div>


  <Field
  name="gender"
  as={Select}
  label="Gender"
  variant="outlined"
  fullWidth
>
  <MenuItem value="male">Male</MenuItem>
  <MenuItem value="female">Female</MenuItem>
  <MenuItem value="other">Other</MenuItem>
</Field>
{errors["gender"] && touched["gender"] && <div>{errors["gender"]}</div>}
  </div>
)} 

    </div>
  )
}
export default GenderInput