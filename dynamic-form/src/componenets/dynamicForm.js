import {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from '@mui/material';
import './dynamicForm.css'

import {developerValidationSchema } from './validation';
import UserTypeComponenet from './userTypeComponent';
import InputFeild from './inputfields';
import GenderInput from './genderInput';
import DataPicker from './dataPicker';

import {developerInitialValues, developerFields, initialValues } from '../helpers/developerFileds';

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
        {({ errors, touched, isValid, values  }) => (
          <Form>
            <div className='fomrwrpper'>
          <div className='fieldsColumn'>

          

            <UserTypeComponenet
            setapiURL={setapiURL}
            setValidationSchema={setValidationSchema}
            setExtraFiedls={setExtraFiedls}
            setExtraInitialValues={setExtraInitialValues}
            />
            <DataPicker />
        
            <InputFeild name={'email'} type={'email'} label={'Email'} touched={touched} errors={errors} values={values} previusElement={'none'}/>
            <InputFeild name={'firstName'} type={'text'} label={'First Name'} touched={touched} errors={errors} values={values} previusElement={'email'} />
             <InputFeild name={'lastName'} type={'text'} label={'Last Name'} touched={touched} errors={errors} values={values} previusElement={'firstName'}/>
             <InputFeild name={'password'} type={'password'} label={'Password'} touched={touched} errors={errors} values={values} previusElement='lastName'/>
            <InputFeild name={'confirmPassword'} type={'password'} label={'Confirm Password'} touched={touched} errors={errors} values={values} previusElement='password'/>
            <InputFeild name={'address'} type={'text'} label={'Address'} touched={touched} errors={errors} values={values} previusElement='confirmPassword'/>
            <InputFeild name={'phoneNumber'} type={'text'} label={'Phone Number'} touched={touched} errors={errors} values={values} previusElement='address'/>
            </div>
            <div className='fieldsColumn'>


            <GenderInput touched={touched} errors={errors} values={values} previusElement='phoneNumber'/>
            <div>
              Birthday
              <div style={{width: '20px'}} className=''>  
                <InputFeild name={'day'} type={'text'} label={'Day'} touched={touched} errors={errors} values={values} previusElement='gender'/>
              </div>
              <div>  
                <InputFeild name={'month'} type={'text'} label={'Month'} touched={touched} errors={errors} values={values} previusElement='gender'/>
              </div>
              <div> 
                <InputFeild name={'year'} type={'text'} label={'Year'} touched={touched} errors={errors} values={values} previusElement='gender'/>
              </div>

            </div>
            {extraFields.map((field) => {
              return (
                <InputFeild name={field.name} type={'text'} label={field.label} touched={touched} errors={errors} values={values} previusElement={field.previusElement}/>
                )
              })} 
          
              </div>
            </div>
          <Button type="submit" disabled={!isValid} className='submitBtn'>Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
