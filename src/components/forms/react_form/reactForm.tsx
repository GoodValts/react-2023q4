import styles from './reactForm.module.scss';
import { useNavigate } from 'react-router-dom';
import Select, { CSSObjectWithLabel } from 'react-select';
import { countriesArr } from '../data/countries';
import { useForm, Controller, Path, UseFormRegister } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { reactSchemaMain } from '../data/yup/yupSchemas';
import { gendersArr } from '../data/genders';

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
      autoComplete="on"
      {...register(label, { required })}
    />
  </>
);

{
  /* <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className={styles.input}
                type="text"
                required={true}
                inputProps={{
                  style: {
                    textAlign: 'center',
                    color: '#323940',
                  },
                }}
              />
            )}
          /> */
}

const ReactForm = () => {
  const navTo = useNavigate();
  const goBack = () => navTo(-1);
  const navToTerms = () => navTo('/terms');

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(reactSchemaMain) });

  return (
    <section className={styles.section}>
      <button className={styles.returnButton} onClick={goBack}>
        Return
      </button>

      <form
        className={styles.form}
        onSubmit={handleSubmit((d) => {
          console.log(d);
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
          {/* <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className={styles.input}
                type="text"
                required={true}
                inputProps={{
                  style: {
                    textAlign: 'center',
                    color: '#323940',
                  },
                }}
              />
            )}
          /> */}
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
          {/* <input
            type="text"
            name="gender"
            control={control}
            rules={{ required: true }}
            autoComplete="on"
            list="datalistGender"
          ></input>
          <datalist id="datalistGender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </datalist> */}
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
                // options={options as unknown as GroupBase<string>[]}
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
          className={`${styles.button} ${styles.buttonDisabled}`}
          type="submit"
        />
      </form>
    </section>
  );
};

export default ReactForm;

// <Input
//   className={styles.input}
//   type="text"
//   {...register('name', {
//     required: true,
//     pattern: /^[A-Z][a-zA-Z]*$/,
//   })}
// ></Input>
// {errors.name && (
//   <p className={styles.errorMessage}>This field is required</p>
// )}

{
  /* <>
  <label className={styles.label}>Country:</label>
  <Select label="Country" options={countriesArr} {...register('Age')} />
  <p className={styles.errorMessage}>{someError}</p>
</>; */
}
