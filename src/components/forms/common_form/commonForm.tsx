import { useState, useRef } from 'react';
import styles from './commonForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { countriesArr } from '../data/countries';
import {
  schemaAge,
  schemaCountry,
  schemaEmail,
  schemaGender,
  schemaMain,
  schemaName,
  schemaPassword,
  schemaPhoto,
  schemaValidatePassword,
} from '../data/yup/yupSchemas';
import { convertToBase64 } from '../data/converterBase64';
import { useAppDispatch } from '../../../store/hooks';
import {
  setCommonAge,
  setCommonCountry,
  setCommonGender,
  setCommonMail,
  setCommonName,
  setCommonPassword,
  setCommonPhoto,
} from '../../../store/reducers/commonFormSlice';

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

const CommonForm = () => {
  const navTo = useNavigate();
  const dispatch = useAppDispatch();

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

  const goBack = () => navTo(-1);

  const handleCountry = (str: string) => {
    const arr = [...countryLabelsArr];
    const newArr = arr.filter((el) => el.label.toLowerCase().includes(str));
    setCountryLabels(newArr);

    const input = countryRef.current as HTMLInputElement | null;
    if (input) validateCountry(input.value);
  };

  const changeValues = () => {
    const checkbox = termsRef.current as HTMLInputElement | null;
    if (checkbox) checkbox.checked = false;
  };

  const validateName = (str: string) => {
    schemaName
      .validate({ name: str })
      .then(() => setErrors((prevErrors) => ({ ...prevErrors, name: '' })))
      .catch((err) => {
        setErrors((prevErrors) => ({ ...prevErrors, name: err.message }));
      });
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

  const validateSubmit = (
    name: string,
    age: number,
    email: string,
    password: string,
    confirmPassword: string,
    gender: string,
    photo: File,
    country: string,
    terms: boolean
  ) => {
    schemaMain
      .validate({
        name: name,
        age: age,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        gender: gender,
        photo: photo,
        country: country,
        terms: terms,
      })
      .then(() => {
        setIsChecked(true);
      })
      .catch(() => {
        setIsChecked(false);
      });
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
      const terms = termsRef.current as HTMLInputElement | null;
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
        validateEmail(email.value);
        validatePassword(password.value, confirmPassword.value);
        validateGender(gender.value);
        validatePhoto(photo.files ? photo.files[0] : null);
        validateCountry(country.value);

        if (photo.files && terms) {
          validateSubmit(
            name.value,
            parseInt(age.value),
            email.value,
            password.value,
            confirmPassword.value,
            gender.value,
            photo.files[0],
            country.value,
            terms.checked
          );
        }
      } else {
        throw new Error('something went wrong');
      }
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        terms: 'Conditions & Terms should be accepted',
      }));
      setIsChecked(false);
    }
  };

  const throwToStore = async () => {
    const name = nameRef.current as HTMLInputElement | null;
    const age = ageRef.current as HTMLInputElement | null;
    const email = emailRef.current as HTMLInputElement | null;
    const gender = genderRef.current as HTMLInputElement | null;
    const photo = photoRef.current as HTMLInputElement | null;
    const country = countryRef.current as HTMLInputElement | null;
    const password = passwordRef.current as HTMLInputElement | null;

    if (name && age && email && gender && photo && country && password) {
      if (photo.files)
        convertToBase64(photo.files[0])
          .then((base64String) => {
            dispatch(setCommonPhoto(base64String));
            dispatch(setCommonName(name.value));
            dispatch(setCommonAge(parseInt(age.value)));
            dispatch(setCommonMail(email.value));
            dispatch(setCommonGender(gender.value));
            dispatch(setCommonCountry(country.value));
            dispatch(setCommonPassword(password.value));
          })
          .then(() => navTo('/'))
          .catch((error) => {
            console.error('error=', error.message);
          });
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
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            onChange={(event) => {
              validateName(event.target.value);
              changeValues();
            }}
            ref={nameRef}
            className={styles.input}
          ></input>
          <span className={styles.errorText}>{errors.name}</span>
        </div>
        <div>
          <label className={styles.label} htmlFor="age">
            Age:
          </label>
          <input
            type="number"
            min="0"
            max="1000"
            id="age"
            name="age"
            autoComplete="age"
            onChange={(event) => {
              validateAge(parseInt(event.target.value));
              changeValues();
            }}
            ref={ageRef}
            className={styles.input}
          ></input>
          <span className={styles.errorText}>{errors.age}</span>
        </div>
        <div>
          <label className={styles.label} htmlFor="email">
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            onChange={(event) => {
              validateEmail(event.target.value);
              changeValues();
            }}
            ref={emailRef}
            className={styles.input}
          ></input>
          <span className={styles.errorText}>{errors.email}</span>
        </div>
        <div>
          <label className={styles.label} htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="password"
            onChange={(event) => {
              const confirmPassword =
                confirmPasswordRef.current as HTMLInputElement | null;
              if (confirmPassword) {
                validatePassword(event.target.value, confirmPassword?.value);
              }
              changeValues();
            }}
            ref={passwordRef}
            className={styles.input}
          ></input>
          <span className={styles.errorText}>{errors.password}</span>
        </div>
        <div>
          <label className={styles.label} htmlFor="confirmPassword">
            Confirm password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={(event) => {
              const password = passwordRef.current as HTMLInputElement | null;
              if (password) {
                validatePassword(password.value, event.target.value);
              }
              changeValues();
            }}
            ref={confirmPasswordRef}
            className={styles.input}
          ></input>
          <span className={styles.errorText}>{errors.confirmPassword}</span>
        </div>
        <div>
          <label className={styles.label} htmlFor="gender">
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            autoComplete="gender"
            onChange={(event) => {
              validateGender(event.target.value);
              changeValues();
            }}
            ref={genderRef}
            className={styles.select}
          >
            <option className={styles.option} value="n/d"></option>
            <option className={styles.option} value="male">
              male
            </option>
            <option className={styles.option} value="female">
              female
            </option>
            <option className={styles.option} value="other">
              other
            </option>
          </select>
          <span className={styles.errorText}>{errors.gender}</span>
        </div>
        <div>
          <label className={styles.label} htmlFor="photo">
            Photo:
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            autoComplete="photo"
            accept="image/jpeg, image/jpeg, image/png"
            onChange={(event) => {
              validatePhoto(
                event.currentTarget.files ? event.currentTarget.files[0] : null
              );
              changeValues();
            }}
            ref={photoRef}
            className={`${styles.input} ${styles.inputFile}`}
          ></input>
          <span className={styles.errorText}>{errors.photo}</span>
        </div>
        <div>
          <label className={styles.label} htmlFor="country">
            Country:
          </label>
          <input
            type="text"
            id="country"
            name="country"
            autoComplete="country"
            onChange={(event) => {
              handleCountry(event.target.value);
              changeValues();
            }}
            onClick={() => setIsShowLabels(true)}
            ref={countryRef}
            className={styles.input}
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
              }}
              ref={termsRef}
              className={`${styles.input} ${styles.inputCheckbox}`}
            ></input>
            <label
              className={`${styles.label} ${styles.inline}`}
              htmlFor="acceptTerms"
            >
              I accept{' '}
              <span className={styles.link} onClick={navToTerms}>
                Conditions & Terms
              </span>
            </label>
          </div>
          <span className={styles.errorText}>{errors.terms}</span>
        </div>
        {isChecked && (
          <input
            type="submit"
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              throwToStore();
            }}
          ></input>
        )}
        {!isChecked && (
          <button
            className={`${styles.button} ${styles.unActive}`}
            onClick={(e) => {
              e.preventDefault();
              validateForm();
            }}
          >
            Submit
          </button>
        )}
      </form>
    </section>
  );
};

export default CommonForm;
