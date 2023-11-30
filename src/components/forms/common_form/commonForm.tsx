import { useState } from 'react';
import styles from './commonForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { countriesArr } from '../data/countries';

const countryLabelsArr = [...countriesArr];

const errorsObj = {
  name: [],
  age: [],
  mail: [],
  password: [],
  gender: [],
  photo: [],
  country: [],
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

    console.log('str=', str);
    console.log('newArr=', newArr);
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
          <input type="text" id="name"></input>
          <span className={styles.errorText}>{errors.name[0]}</span>
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" min="0" max="1000" id="age"></input>
          <span className={styles.errorText}></span>
        </div>
        <div>
          <label htmlFor="mail">E-mail:</label>
          <input type="email" id="mail"></input>
          <span className={styles.errorText}></span>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password"></input>
          <span className={styles.errorText}></span>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input type="password" id="confirmPassword"></input>
          <span className={styles.errorText}></span>
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select id="gender">
            <option value="n/d"></option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
          <span className={styles.errorText}></span>
        </div>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input type="file" id="photo"></input>
          <span className={styles.errorText}></span>
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
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
          <span className={styles.errorText}></span>{' '}
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
