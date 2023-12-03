import styles from './reactForm.module.scss';
import { useNavigate } from 'react-router-dom';
import Select, { CSSObjectWithLabel } from 'react-select';
import { countriesArr } from '../data/countries';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaMain } from '../data/yup/yupSchemas';
import { Checkbox, Input, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  hidePseudoElements: {
    '&::before, &::after': {
      display: 'none',
    },
  },
});

const ReactForm = () => {
  const classes = useStyles();

  const navTo = useNavigate();
  const goBack = () => navTo(-1);
  const navToTerms = () => navTo('/terms');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schemaMain) });

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
          <Controller
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
          />
          <p className={styles.errorMessage}>
            {errors.name ? errors.name.message : ''}
          </p>
        </>
        <>
          <label className={styles.label}>Age:</label>
          <Controller
            name="age"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className={styles.input}
                type="number"
                required={true}
                inputProps={{
                  style: {
                    textAlign: 'center',
                    color: '#323940',
                  },
                }}
              />
            )}
          />
          <p className={styles.errorMessage}>
            {errors.age ? errors.age.message : ''}
          </p>
        </>
        <>
          <label className={styles.label}>E-mail:</label>
          <Controller
            name="email"
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
          />
          <p className={styles.errorMessage}>
            {errors.email ? errors.email.message : ''}
          </p>
        </>
        <>
          <label className={styles.label}>Password:</label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className={styles.input}
                type="password"
                required={true}
                inputProps={{
                  style: {
                    textAlign: 'center',
                    color: '#323940',
                  },
                }}
              />
            )}
          />
          <p className={styles.errorMessage}>
            {errors.password ? errors.password.message : ''}
          </p>
        </>
        <>
          <label className={styles.label}>Confirm password:</label>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className={styles.input}
                type="password"
                required={true}
                inputProps={{
                  style: {
                    textAlign: 'center',
                    color: '#323940',
                  },
                }}
              />
            )}
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
                // options={options as unknown as GroupBase<string>[]}
                options={[
                  { value: 'n/d', label: '' },
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'other', label: 'Other' },
                ]}
              />
            )}
          />
          <p className={styles.errorMessage}>
            {errors.gender ? errors.gender.message : ''}
          </p>
        </>

        <>
          <label className={styles.label}>Photo:</label>
          <div className="flex flexCenter">
            <Controller
              name="photo"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  className={`${classes.hidePseudoElements} ${styles.fileInput}`}
                  type="file"
                  required={true}
                  inputProps={{
                    style: {
                      height: '25px',
                    },
                  }}
                />
              )}
            />
          </div>
          {errors.photo && (
            <p className={styles.errorMessage}>{errors.photo.message}</p>
          )}
        </>
        <>
          <div className="flex flexCenter">
            <Controller
              name="terms"
              control={control}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  className={styles.checkBox}
                  required={true}
                  color={'primary'}
                />
              )}
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
