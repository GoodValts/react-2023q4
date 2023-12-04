import styles from './reactForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { countriesArr } from '../data/countries';
import { useForm, Path, UseFormRegister } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { reactSchemaMain } from '../data/yup/yupSchemas';
import { gendersArr } from '../data/genders';
import { useAppDispatch } from '../../../store/hooks';
import {
  setReactAge,
  setReactCountry,
  setReactGender,
  setReactMail,
  setReactName,
  setReactPassword,
  setReactPhoto,
} from '../../../store/reducers/reactFormSlice';
import { convertToBase64 } from '../data/converterBase64';
import React, { useEffect, useRef, useState } from 'react';
import { UseFormTrigger, UseFormSetValue } from 'react-hook-form/dist/types';

interface IFormValues {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  photo: File[];
  country: string;
  terms: boolean;
}

type InputProps = {
  styles: string;
  type?: string;
  accept?: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

export const MyInput = ({
  accept,
  styles,
  type,
  label,
  register,
  required,
}: InputProps) => (
  <>
    <input
      accept={accept}
      type={type || 'text'}
      className={styles}
      autoComplete={label}
      {...register(label, { required })}
    />
  </>
);

type SelectProps = {
  dataArray: { value: string; label: string }[];
  name: Path<IFormValues>;
  setValue: UseFormSetValue<IFormValues>;
  trigger: UseFormTrigger<IFormValues>;
};

const CustomSelect = ({ name, dataArray, setValue, trigger }: SelectProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(dataArray);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    console.log('handleInputChange value=', value);
    setInputValue(value);
    const filtered = dataArray.filter((option) =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setValue(name, e.target.value);
    trigger(name);
  };

  const handleInputClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (value: string) => {
    setInputValue(value);
    console.log('handleOptionClick value=', value);

    setIsDropdownOpen(false);
    setFilteredOptions(dataArray);

    setValue(name, value);
    trigger(name);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node) &&
      inputRef.current !== e.target
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <input
        className={`${styles.input} ${styles.select}`}
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
        onClick={handleInputClick}
        placeholder={`Select ${name}...`}
        ref={inputRef}
      />
      {isDropdownOpen && (
        <ul ref={dropdownRef} className={styles.selectList}>
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option.label)}
              className={styles.selectListItem}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ReactForm = () => {
  const navTo = useNavigate();
  const goBack = () => navTo(-1);
  const navToTerms = () => navTo('/terms');

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange', resolver: yupResolver(reactSchemaMain) });

  return (
    <section className={styles.section}>
      <button className={styles.returnButton} onClick={goBack}>
        Return
      </button>

      <form
        className={styles.form}
        onSubmit={handleSubmit((d) => {
          convertToBase64(d.photo[0])
            .then((base64String) => {
              dispatch(setReactName(d.name));
              dispatch(setReactAge(d.age));
              dispatch(setReactMail(d.email));
              dispatch(setReactGender(d.gender));
              dispatch(setReactPhoto(base64String));
              dispatch(setReactCountry(d.country));
              dispatch(setReactPassword(d.password));
            })
            .then(() => navTo('/'))
            .catch((err) => console.error(err.message));
        })}
      >
        <h2 className={styles.header}>React form</h2>

        <>
          <label className={styles.label}>Name:</label>
          <MyInput
            label="name"
            register={register}
            required={true}
            styles={styles.input}
          />
          <p className={styles.errorMessage}>
            {errors.name ? errors.name.message : ''}
          </p>
        </>
        <>
          <label className={styles.label}>Age:</label>
          <MyInput
            label="age"
            register={register}
            required={true}
            styles={styles.input}
            type="number"
          />
          <p className={styles.errorMessage}>
            {errors.age ? errors.age.message : ''}
          </p>
        </>
        <>
          <label className={styles.label}>E-mail:</label>
          <MyInput
            label="email"
            register={register}
            required={true}
            styles={styles.input}
          />
          <p className={styles.errorMessage}>
            {errors.email ? errors.email.message : ''}
          </p>
        </>
        <>
          <label className={styles.label}>Password:</label>
          <MyInput
            label="password"
            register={register}
            required={true}
            styles={styles.input}
            type="password"
          />
          <p className={styles.errorMessage}>
            {errors.password ? errors.password.message : ''}
          </p>
        </>
        <>
          <label className={styles.label}>Confirm password:</label>
          <MyInput
            label="confirmPassword"
            register={register}
            required={true}
            styles={styles.input}
            type="password"
          />
          <p className={styles.errorMessage}>
            {errors.confirmPassword ? errors.confirmPassword.message : ''}
          </p>
        </>
        <>
          <label className={styles.label}>Country:</label>
          <CustomSelect
            name="country"
            dataArray={countriesArr}
            setValue={setValue}
            trigger={trigger}
          />
          <p className={styles.errorMessage}>
            {errors.country ? errors.country.message : ''}
          </p>
        </>
        <>
          <label className={styles.label}>Gender:</label>
          <CustomSelect
            name="gender"
            dataArray={gendersArr}
            setValue={setValue}
            trigger={trigger}
          />
          <p className={styles.errorMessage}>
            {errors.gender ? errors.gender.message : ''}
          </p>
        </>
        <>
          <label className={styles.label}>Photo:</label>
          <MyInput
            label="photo"
            register={register}
            required={true}
            styles={`${styles.input} ${styles.fileInput}`}
            type="file"
            accept="image/jpeg, image/jpeg, image/png"
          />
          {errors.photo && (
            <p className={styles.errorMessage}>{errors.photo.message}</p>
          )}
        </>
        <>
          <div className="flex flexCenter">
            <MyInput
              label="terms"
              register={register}
              required={true}
              styles={`${styles.input} ${styles.checkBoxInput}`}
              type="checkbox"
            />
            <label className={styles.label}>
              I accept{' '}
              <span className={styles.link} onClick={navToTerms}>
                Conditions & Terms
              </span>
            </label>
          </div>
          <p className={styles.errorMessage}>
            {errors.terms ? errors.terms.message : ''}
          </p>
        </>

        <input
          className={`${styles.button} ${
            !isValid ? styles.buttonDisabled : ''
          }`}
          type="submit"
        />
      </form>
    </section>
  );
};

export default ReactForm;
