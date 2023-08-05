import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import {developerInitialValues, developerFields, clientFields, clientInitialValues } from '../helpers/developerFileds';
import {developerValidationSchema, clientValidationSchema } from './validation';


export default function UserTypeComponenet(props) {

const {setExtraInitialValues, setExtraFiedls, setValidationSchema, setapiURL } = props;

  const handleDeveloperClick = () => {
    setValidationSchema(developerValidationSchema);
    setExtraInitialValues(developerInitialValues);
    setExtraFiedls(developerFields);
    setapiURL('/api/addadeeveloper')
  }

  const handleClientClick = () => {
    setValidationSchema(clientValidationSchema);
    setExtraInitialValues(clientInitialValues);
    setExtraFiedls(clientFields);
    setapiURL('/api/addsclient');
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
        <FormControlLabel value="developer" control={<Radio />} label="Developer" onClick={handleDeveloperClick}/>
        <FormControlLabel value="client" control={<Radio />} label="Client" onClick={handleClientClick}/>
       
      </RadioGroup>
    </FormControl>
  );
}
