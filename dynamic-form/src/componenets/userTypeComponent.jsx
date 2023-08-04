import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function UserTypeComponenet({setUserType}) {

 const handleChangeUserType = (e) => {
  setUserType(e.target.value)

 }

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Sign up as</FormLabel>
      <RadioGroup
      defaultValue='developer'
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="developer" control={<Radio />} label="Developer" onClick={handleChangeUserType}/>
        <FormControlLabel value="client" control={<Radio />} label="Client" onClick={handleChangeUserType}/>
       
      </RadioGroup>
    </FormControl>
  );
}
