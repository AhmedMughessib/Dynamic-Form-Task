import * as Yup from 'yup';

const developerValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  firstName: Yup.string().required('first name is required'),
  lastName: Yup.string().required('last name is required'),
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
      address: Yup.string().required('Address is required'),
      gender: Yup.string().required('gender is required'),
      phoneNumber: Yup.string().required('Phone Number is required'),
      yearsOfExperience: Yup.string().required(' Years of Experience are required'),
      skills: Yup.string().required('Skills are required'),
      jobTitle: Yup.string().required('Job Title is required'),

});

const clientValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  firstName: Yup.string().required('first name is required'),
  lastName: Yup.string().required('last name is required'),
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
      address: Yup.string().required('Address is required'),
      gender: Yup.string().required('gender is required'),
      phoneNumber: Yup.string().required('Phone Number is required'),
      yearsOfExperience: Yup.string().required(' Years of Experience are required'),
      skillsNeeded: Yup.string().required('Skills are required'),
      oranizationName: Yup.string().required('Organization Name is required'),

});



export  {developerValidationSchema, clientValidationSchema};
