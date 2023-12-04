import styles from './reactForm.module.scss';
import { useNavigate } from 'react-router-dom';
import Select, { CSSObjectWithLabel } from 'react-select';
import { countriesArr } from '../data/countries';
import { useForm, Controller, Path, UseFormRegister } from 'react-hook-form';
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
  setReactPhoto,
} from '../../../store/reducers/reactFormSlice';
import { convertToBase64 } from '../data/converterBase64';

interface IFormValues {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: { value: string; label: string };
  photo: File[];
  country: { value: string; label: string };
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

const ReactForm = () => {
  const navTo = useNavigate();
  const goBack = () => navTo(-1);
  const navToTerms = () => navTo('/terms');

  const dispatch = useAppDispatch();

  const {
    control,
    register,
    handleSubmit,
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
              dispatch(setReactGender(d.gender.value));
              dispatch(setReactPhoto(base64String));
              dispatch(setReactCountry(d.country.value));
            })
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
          <Controller
            name="country"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                styles={{
                  valueContainer: (baseStyles: CSSObjectWithLabel) => ({
                    ...baseStyles,
                    textAlign: 'center',
                    marginLeft: '36px',
                  }),
                  option: (baseStyles: CSSObjectWithLabel) => ({
                    ...baseStyles,
                    textAlign: 'center',
                  }),
                }}
                {...field}
                options={countriesArr}
              />
            )}
          />
          <p className={styles.errorMessage}>
            {errors.country ? errors.country.message : ''}
          </p>
        </>
        <>
          <label className={styles.label}>Gender:</label>
          <Controller
            name="gender"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                styles={{
                  valueContainer: (baseStyles: CSSObjectWithLabel) => ({
                    ...baseStyles,
                    textAlign: 'center',
                    marginLeft: '36px',
                  }),
                  option: (baseStyles: CSSObjectWithLabel) => ({
                    ...baseStyles,
                    textAlign: 'center',
                  }),
                }}
                {...field}
                options={gendersArr}
              />
            )}
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
