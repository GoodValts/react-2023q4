import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z]+$/, 'Name should contain only English letters')
    .matches(/^[A-Z]/, 'First letter should be uppercase')
    .required('Name is a required field'),

  age: yup
    .number()
    .positive('Age should be a positive number')
    .integer('Age should be an integer')
    .required('Age is a required field'),

  email: yup
    .string()
    .email('invalid email format')
    .required('Email is a required field'),

  password: yup
    .string()
    .matches(/^(?=.*\d)/, 'Password should contain at least 1 number')
    .matches(
      /^(?=.*[a-z])/,
      'Password should contain at least 1 lowercase letter'
    )
    .matches(
      /^(?=.*[A-Z])/,
      'Password should contain at least 1 uppercase letter'
    )
    .matches(
      /^(?=.*[!@#$%^&*()])/,
      'Password should contain at least 1 special character'
    )
    .min(8, 'Password should be at least 8 characters long')
    .required('Password is a required field'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm Password is a required field'),

  gender: yup.string().required('Gender is a required field'),
});
