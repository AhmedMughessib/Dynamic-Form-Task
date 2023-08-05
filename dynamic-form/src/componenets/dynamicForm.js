import {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from '@mui/material';

import {developerValidationSchema } from './validation';
import UserTypeComponenet from './userTypeComponent';
import InputFeild from './inputfields';
import GenderInput from './genderInput';
import DareInput from './dataInput';

import {developerInitialValues, developerFields, initialValues } from '../helpers/developerFileds';

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';









const DynamicForm = () => {
const [extraInitialValues,setExtraInitialValues] = useState(developerInitialValues);
const [extraFields, setExtraFiedls] = useState(developerFields);
const [validationSchema, setValidationSchema] = useState(developerValidationSchema);
const [apiURL, setapiURL] = useState('api/addDeveloper');




  return (
    <div>
      <h1>Simple Form with Formik and Yup</h1>
      <Formik
        initialValues={{...initialValues, ...extraInitialValues}}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <UserTypeComponenet
            setapiURL={setapiURL}
            setValidationSchema={setValidationSchema}
            setExtraFiedls={setExtraFiedls}
            setExtraInitialValues={setExtraInitialValues}
            />
          
           
            <InputFeild name={'email'} type={'email'} label={'Email'} touched={touched} errors={errors}/>
            <InputFeild name={'firstName'} type={'text'} label={'First Name'} touched={touched} errors={errors}/>
            <InputFeild name={'lastName'} type={'text'} label={'Last Name'} touched={touched} errors={errors}/>
            <InputFeild name={'password'} type={'password'} label={'Password'} touched={touched} errors={errors}/>
            <InputFeild name={'confirmPassword'} type={'password'} label={'Confirm Password'} touched={touched} errors={errors}/>
            <InputFeild name={'address'} type={'text'} label={'Address'} touched={touched} errors={errors}/>
            <InputFeild name={'phoneNumber'} type={'text'} label={'Phone Number'} touched={touched} errors={errors}/>
            <GenderInput touched={touched} errors={errors}/>
            <div>
              <Field
              name='date'
              type='text'
              as={DareInput}
              label='Date'
              variant="outlined"
              fullWidth
              />
              {errors['date'] && touched['date'] && <div>{errors['date']}</div>}
            </div>
            {extraFields.map((field) => {
              return (
                <InputFeild name={field.name} type={'text'} label={field.label} touched={touched} errors={errors}/>
              )
            })}
          
          <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
