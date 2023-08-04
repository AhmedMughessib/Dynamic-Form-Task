import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required').min(9, 'mininiu 3 lsette'),
  firstName: Yup.string().required('first name is required'),
  // lastName: Yup.string().required('last name is required'),

});


const developerValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least 1 uppercase letter, 1 number, and 1 special character'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  address: Yup.string().required('Address is required'),
  birthdate: Yup.date()
    .max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), 'You must be at least 18 years old')
    .required('Birthdate is required'),
});


export  {developerValidationSchema, validationSchema};
