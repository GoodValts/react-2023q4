import { useState } from 'react';
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
} from './yup/yupSchemas';

const countryLabelsArr = [...countriesArr];

const errorsObj = {
  name: '',
  age: '',
  email: '',
  password: '',
  gender: '',
  photo: '',
  country: '',
};

const CommonForm = () => {
  const navTo = useNavigate();

  const [countryLabels, setCountryLabels] = useState(countryLabelsArr);
  const [isShowLabels, setIsShowLabels] = useState(false);
  const [country, setCountry] = useState('');

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
    setCountry(str);
    validateCountry(country);

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
    schemaAge
      .validate({ age: number })
      .then(() => setErrors((prevErrors) => ({ ...prevErrors, age: '' })))
      .catch((err) =>
        setErrors((prevErrors) => ({ ...prevErrors, age: err.message }))
      );
  };

  const validateEmail = (str: string) => {
    schemaEmail
      .validate({ email: str })
      .then(() => setErrors((prevErrors) => ({ ...prevErrors, email: '' })))
      .catch((err) =>
        setErrors((prevErrors) => ({ ...prevErrors, email: err.message }))
      );
  };

  // const validatePassword = (str: string) => {
  //   schemaPassword
  //     .validate({ password: str })
  //     .then(() => setErrors((prevErrors) => ({ ...prevErrors, password: '' })))
  //     .catch((err) =>
  //       setErrors((prevErrors) => ({ ...prevErrors, password: err.message }))
  //     );
  // };

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
            onChange={(event) => validateName(event.target.value)}
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
            onChange={(event) => validateAge(parseInt(event.target.value) || 0)}
          ></input>
          <span className={styles.errorText}>{errors.age}</span>
        </div>
        <div>
          <label htmlFor="mail">E-mail:</label>
          <input
            type="email"
            id="mail"
            name="email"
            onChange={(event) => validateEmail(event.target.value)}
          ></input>
          <span className={styles.errorText}>{errors.email}</span>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"></input>
          <span className={styles.errorText}></span>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input type="password" id="confirmPassword" name="password"></input>
          <span className={styles.errorText}></span>
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            onChange={(event) => validateGender(event.target.value)}
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
          ></input>
          <span className={styles.errorText}>{errors.photo}</span>
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={(event) => handleCountry(event.target.value)}
            onClick={() => setIsShowLabels(true)}
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
                      setCountry(option.label);
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
            <input type="checkbox" id="acceptTerms"></input>
            <label htmlFor="acceptTerms" className={styles.inline}>
              I accept{' '}
              <span className={styles.link} onClick={navToTerms}>
                Conditions & Terms
              </span>
            </label>
          </div>
          <span className={styles.errorText}></span>
        </div>
        <input
          type="submit"
          className={
            isChecked ? styles.button : `${styles.button} ${styles.unActive}`
          }
        ></input>
      </form>
    </section>
  );
};

export default CommonForm;
