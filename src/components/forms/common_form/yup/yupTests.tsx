import * as yup from 'yup';
import { countriesArr } from '../../data/countries';

export const nameValidation = yup
  .string()
  .matches(/^[A-Za-z]+$/, 'Name should contain only English letters')
  .matches(/^[A-Z]/, 'First letter should be uppercase')
  .required('Name is a required field');

export const ageValidation = yup
  .number()
  .positive('Age should be a positive number')
  .integer('Age should be an integer')
  .min(16, 'This content is 16+')
  .required('Age is a required field');

export const emailValidation = yup
  .string()
  .email('Invalid email format')
  .required('Email is a required field');

export const passwordValidation = yup
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
  .required('Password is a required field');

export const confirmPasswordValidation = yup
  .string()
  .oneOf([yup.ref('password')], 'Passwords do not match')
  .required('Confirm Password is a required field');

export const genderValidation = yup
  .string()
  .notOneOf(['n/d'], 'Gender is a required field')
  .required('Gender is a required field');

export const photoValidation = yup
  .mixed<File>()
  .test('fileSize', 'Max file size exceeded', (value) => {
    const bitesInByte = 16;
    const bytesInKilobyte = 1024;
    const kilobyteInMegabyte = 1024;
    if (!value) return true;
    return value.size <= bitesInByte * bytesInKilobyte * kilobyteInMegabyte;
  })
  .test('fileType', 'Photo should be .jpg / .jpeg / .png', (value) => {
    if (!value) return true;
    const supportedFormats = ['image/jpeg', 'image/jpg', 'image/png'];
    return supportedFormats.includes(value.type);
  })
  .required('Photo is a required field');

export const countryValidation = yup
  .string()
  .test('Country should exist', (string) => {
    if (!string) return true;
    const newArr = countriesArr.map((el) => el.value);
    return newArr.includes(string);
  })
  .required();

export const termsValidation = yup
  .boolean()
  .test(
    'termsTest',
    'Conditions & Terms should be accepted',
    (value) => value === true
  )
  .required();
