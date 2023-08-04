import {useState, useEffect} from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button } from '@mui/material';
import * as Yup from 'yup';

import {validationSchema } from './validation';
import UserTypeComponenet from './userTypeComponent';

import developerInputsList from './filedsData';
const ahmed = developerInputsList[0].name

const DynamicForm = () => {
const [userType, setUserType] = useState('developer')


  return (
    <div>
      <h1>Simple Form with Formik and Yup</h1>
      <Formik
        initialValues={{ firstName: '', ahmed : ''}}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <UserTypeComponenet setUserType={setUserType} userType={userType}/>
            <div>
            <Field
            name="firstName"
            type="text"
            as={TextField}
            label="Name"
            variant="outlined"
            fullWidth
            />
            {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}
            </div>
            <div>
            <Field
            name={ahmed}
            type="email"
            as={TextField}
            label="Email"
            variant="outlined"
            fullWidth
            />
            {errors[ahmed] && touched[ahmed] && <div>{errors[ahmed]}</div>}
            </div>


            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
