import * as yup from 'yup';
import { countriesArr } from '../countries';
import { gendersArr } from '../genders';

export const nameValidation = yup
  .string()
  .required('Name is a required field')
  .matches(/^[A-Za-z]+$/, 'Name should contain only English letters')
  .matches(/^[A-Z]/, 'First letter should be uppercase');

export const ageValidation = yup
  .number()
  .nullable()
  .transform((value) => (isNaN(value) ? undefined : value))
  .required('Age is a required field')
  .positive('Age should be a positive number')
  .integer('Age should be an integer')
  .min(16, 'This content is 16+')
  .max(150, 'Are you kidding me?');

export const emailValidation = yup
  .string()
  .required('Email is a required field')
  .email('Invalid email format');

export const passwordValidation = yup
  .string()
  .required('Password is a required field')
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
  .min(8, 'Password should be at least 8 characters long');

export const confirmPasswordValidation = yup
  .string()
  .required('Confirm Password is a required field')
  .oneOf([yup.ref('password')], 'Passwords do not match');

export const genderValidation = yup
  .string()
  .required('Gender is a required field')
  .notOneOf(['n/d'], 'Gender is a required field');

export const genderValidationReact = yup
  .mixed<{ value: string; label: string }>()
  .required('Gender is a required field')
  .test('gender', 'Gender should exist', (obj) => {
    if (obj === gendersArr[0]) return false;
    return gendersArr.map((obj) => obj.value).includes(obj.value);
  });

export const photoValidation = yup
  .mixed<File>()
  .required('Photo is a required field')
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
  });

export const photoValidationReact = yup
  .mixed<File[]>()
  .required('Photo is a required field')
  .test('fileAmount', 'Photo is a required field', (value) => {
    return value.length === 1;
  })
  .test('fileSize', 'Max file size exceeded', (value) => {
    const bitesInByte = 16;
    const bytesInKilobyte = 1024;
    const kilobyteInMegabyte = 1024;
    if (!value[0]) return true;
    return value[0].size <= bitesInByte * bytesInKilobyte * kilobyteInMegabyte;
  })
  .test('fileType', 'Photo should be .jpg / .jpeg / .png', (value) => {
    if (!value[0]) return true;
    const supportedFormats = ['image/jpeg', 'image/jpg', 'image/png'];
    return supportedFormats.includes(value[0].type);
  });

export const countryValidation = yup
  .string()
  .required()
  .test('Country should exist', (string) => {
    if (!string) return true;
    const newArr = countriesArr.map((el) => el.value);
    return newArr.includes(string);
  });

export const countryValidationReact = yup
  .mixed<{ value: string; label: string }>()
  .required('Country is a required field')
  .test('country', 'Country should exist', (obj) => {
    return countriesArr.map((obj) => obj.value).includes(obj.value);
  });

export const termsValidation = yup
  .boolean()
  .required()
  .test(
    'termsTest',
    'Conditions & Terms should be accepted',
    (value) => value === true
  );
