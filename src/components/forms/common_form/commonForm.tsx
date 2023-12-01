import { useState, useRef } from 'react';
import styles from './commonForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { countriesArr } from '../data/countries';
import {
  schemaAge,
  schemaCountry,
  schemaEmail,
  schemaGender,
  schemaName,
  schemaPassword,
  schemaPhoto,
  schemaValidatePassword,
} from './yup/yupSchemas';
import { configureStore } from '@reduxjs/toolkit';

const countryLabelsArr = [...countriesArr];

const errorsObj = {
  name: '',
  age: '',
  email: '',
  password: '',
  confirmPassword: '',
  gender: '',
  photo: '',
  country: '',
  terms: '',
};

function checkErrors(obj: typeof errorsObj): boolean {
  console.log('obj=', obj);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key as keyof typeof obj] !== '') {
        return false;
      }
    }
  }
  return true;
}

const CommonForm = () => {
  const navTo = useNavigate();
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const genderRef = useRef(null);
  const photoRef = useRef(null);
  const countryRef = useRef(null);
  const termsRef = useRef(null);

  const [countryLabels, setCountryLabels] = useState(countryLabelsArr);
  const [isShowLabels, setIsShowLabels] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState(errorsObj);

  const navToTerms = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.preventDefault();
    navTo('/terms');
  };

  const goBack = () => {
    navTo(-1);
  };

  const handleCountry = (str: string) => {
    const arr = [...countryLabelsArr];
    const newArr = arr.filter((el) => el.label.toLowerCase().includes(str));
    setCountryLabels(newArr);

    const input = countryRef.current as HTMLInputElement | null;
    console.log('input?.value=', input?.value);
    if (input) validateCountry(input.value);

    console.log('str=', str);
    console.log('newArr=', newArr);
  };

  const validateName = (str: string) => {
    schemaName
      .validate({ name: str })
      .then(() => setErrors((prevErrors) => ({ ...prevErrors, name: '' })))
      .catch((err) =>
        setErrors((prevErrors) => ({ ...prevErrors, name: err.message }))
      );
  };

  const validateAge = (number: number) => {
    if (isNaN(number)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        age: 'Age is a required field',
      }));
    } else {
      schemaAge
        .validate({ age: number })
        .then(() => setErrors((prevErrors) => ({ ...prevErrors, age: '' })))
        .catch((err) =>
          setErrors((prevErrors) => ({ ...prevErrors, age: err.message }))
        );
    }
  };

  const validateEmail = (str: string) => {
    schemaEmail
      .validate({ email: str })
      .then(() => setErrors((prevErrors) => ({ ...prevErrors, email: '' })))
      .catch((err) =>
        setErrors((prevErrors) => ({ ...prevErrors, email: err.message }))
      );
  };

  const validatePassword = (str: string, strRepeated: string) => {
    schemaPassword
      .validate({ password: str })
      .then(() => setErrors((prevErrors) => ({ ...prevErrors, password: '' })))
      .catch((err) =>
        setErrors((prevErrors) => ({ ...prevErrors, password: err.message }))
      );
    schemaValidatePassword
      .validate({ password: str, confirmPassword: strRepeated })
      .then(() =>
        setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' }))
      )
      .catch((err) =>
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: err.message,
        }))
      );
  };

  const validateGender = (str: string) => {
    schemaGender
      .validate({ gender: str })
      .then(() => setErrors((prevErrors) => ({ ...prevErrors, gender: '' })))
      .catch((err) =>
        setErrors((prevErrors) => ({ ...prevErrors, gender: err.message }))
      );
  };

  const validatePhoto = (file: File | null) => {
    if (file) {
      schemaPhoto
        .validate({ photo: file })
        .then(() => setErrors((prevErrors) => ({ ...prevErrors, photo: '' })))
        .catch((err) =>
          setErrors((prevErrors) => ({ ...prevErrors, photo: err.message }))
        );
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        photo: 'No files selected',
      }));
    }
  };

  const validateCountry = (str: string) => {
    schemaCountry
      .validate({ country: str })
      .then(() => setErrors((prevErrors) => ({ ...prevErrors, country: '' })))
      .catch((err) =>
        setErrors((prevErrors) => ({ ...prevErrors, country: err.message }))
      );
  };

  const validateForm = () => {
    const checkbox = termsRef.current as HTMLInputElement | null;
    if (checkbox?.checked) {
      setErrors((prevErrors) => ({ ...prevErrors, terms: '' }));

      const name = nameRef.current as HTMLInputElement | null;
      const age = ageRef.current as HTMLInputElement | null;
      const email = emailRef.current as HTMLInputElement | null;
      const password = passwordRef.current as HTMLInputElement | null;
      const confirmPassword =
        confirmPasswordRef.current as HTMLInputElement | null;
      const gender = genderRef.current as HTMLInputElement | null;
      const photo = photoRef.current as HTMLInputElement | null;
      const country = countryRef.current as HTMLInputElement | null;
      if (
        name &&
        age &&
        email &&
        password &&
        confirmPassword &&
        gender &&
        photo &&
        country
      ) {
        validateName(name.value);
        validateAge(parseInt(age.value));
        validateAge(parseInt(age.value));
        validateEmail(email.value);
        validatePassword(password.value, confirmPassword.value);
        validateGender(gender.value);
        validatePhoto(photo.files ? photo.files[0] : null);
        validateCountry(country.value);

        console.log(errors.name);
      } else {
        throw new Error('something went wrong');
      }
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        terms: 'Conditions & Terms should be accepted',
      }));
    }
  };

  return (
    <section className={styles.section}>
      <button className={styles.returnButton} onClick={goBack}>
        Return
      </button>

      <form id="commonForm" className={styles.form}>
        <h2 className={styles.header}>Common form</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(event) => {
              validateName(event.target.value);
            }}
            ref={nameRef}
          ></input>
          <span className={styles.errorText}>{errors.name}</span>
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            min="0"
            max="1000"
            id="age"
            name="age"
            onChange={(event) => validateAge(parseInt(event.target.value))}
            ref={ageRef}
          ></input>
          <span className={styles.errorText}>{errors.age}</span>
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(event) => validateEmail(event.target.value)}
            ref={emailRef}
          ></input>
          <span className={styles.errorText}>{errors.email}</span>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(event) => {
              const confirmPassword =
                confirmPasswordRef.current as HTMLInputElement | null;
              if (confirmPassword) {
                validatePassword(event.target.value, confirmPassword?.value);
              }
            }}
            ref={passwordRef}
          ></input>
          <span className={styles.errorText}>{errors.password}</span>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="password"
            onChange={(event) => {
              const password = passwordRef.current as HTMLInputElement | null;
              if (password) {
                validatePassword(password.value, event.target.value);
              }
            }}
            ref={confirmPasswordRef}
          ></input>
          <span className={styles.errorText}>{errors.confirmPassword}</span>
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            onChange={(event) => validateGender(event.target.value)}
            ref={genderRef}
          >
            <option value="n/d"></option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
          <span className={styles.errorText}>{errors.gender}</span>
        </div>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/jpeg, image/jpeg, image/png"
            onChange={(event) =>
              validatePhoto(
                event.currentTarget.files ? event.currentTarget.files[0] : null
              )
            }
            ref={photoRef}
          ></input>
          <span className={styles.errorText}>{errors.photo}</span>
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            onChange={(event) => handleCountry(event.target.value)}
            onClick={() => setIsShowLabels(true)}
            ref={countryRef}
          ></input>
          <div className="flex">
            {isShowLabels && (
              <ul className={styles.fakeOptionList}>
                {countryLabels.map((option, index) => (
                  <li
                    key={index}
                    value={option.value}
                    className={styles.fakeOption}
                    onClick={() => {
                      setIsShowLabels(false);
                      const input =
                        countryRef.current as HTMLInputElement | null;
                      if (input) {
                        input.value = option.label;
                        validateCountry(input?.value);
                      }
                    }}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <span className={styles.errorText}>{errors.country}</span>{' '}
        </div>
        <div>
          <div className="flex">
            <input
              type="checkbox"
              id="acceptTerms"
              onChange={() => {
                validateForm();
                console.log(checkErrors(errors));
              }}
              ref={termsRef}
            ></input>
            <label htmlFor="acceptTerms" className={styles.inline}>
              I accept{' '}
              <span className={styles.link} onClick={navToTerms}>
                Conditions & Terms
              </span>
            </label>
          </div>
          <span className={styles.errorText}>{errors.terms}</span>
        </div>
        {isChecked && <input type="submit" className={styles.button}></input>}
        {!isChecked && (
          <button className={`${styles.button} ${styles.unActive}`}>
            Submit
          </button>
        )}
      </form>
    </section>
  );
};

export default CommonForm;
