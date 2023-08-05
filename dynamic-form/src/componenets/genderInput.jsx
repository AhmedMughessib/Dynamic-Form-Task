import { Field } from 'formik';
import { Select, MenuItem } from '@mui/material';

const GenderInput = ({touched,errors }) => {
  return (
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
  )
}
export default GenderInput