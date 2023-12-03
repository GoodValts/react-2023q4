import * as yup from 'yup';
import {
  ageValidation,
  confirmPasswordValidation,
  countryValidation,
  countryValidationReact,
  emailValidation,
  genderValidation,
  genderValidationReact,
  nameValidation,
  passwordValidation,
  photoValidation,
  photoValidationReact,
  termsValidation,
} from './yupTests';

export const schemaName = yup.object().shape({
  name: nameValidation,
});

export const schemaAge = yup.object().shape({
  age: ageValidation,
});

export const schemaEmail = yup.object().shape({
  email: emailValidation,
});

export const schemaPassword = yup.object().shape({
  password: passwordValidation,
});

export const schemaValidatePassword = yup.object().shape({
  password: yup.string(),
  confirmPassword: confirmPasswordValidation,
});

export const schemaGender = yup.object().shape({
  gender: genderValidation,
});

export const schemaPhoto = yup.object().shape({
  photo: photoValidation,
});

export const schemaCountry = yup.object().shape({
  country: countryValidation,
});

export const schemaMain = yup.object().shape({
  name: nameValidation,
  age: ageValidation,
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation,
  gender: genderValidation,
  photo: photoValidation,
  country: countryValidation,
  terms: termsValidation,
});

export const reactSchemaMain = yup.object().shape({
  name: nameValidation,
  age: ageValidation,
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation,
  gender: genderValidationReact,
  photo: photoValidationReact,
  country: countryValidationReact,
  terms: termsValidation,
});
