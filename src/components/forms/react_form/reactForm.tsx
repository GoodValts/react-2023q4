import styles from './reactForm.module.scss';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { countriesArr } from '../data/countries';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@material-ui/core/Input';

const ReactForm = () => {
  const navTo = useNavigate();
  const goBack = () => navTo(-1);

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch('example'));
  // const handleChange = (country: { value: string; label: string } | null) => {
  //   console.log(country?.value);
  //   setSelectedCountry(country?.value || null);
  // };

  const someError = 'SOme Erroro acafaljfewscajh';

  return (
    <section className={styles.section}>
      <button className={styles.returnButton} onClick={goBack}>
        Return
      </button>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.header}>React form</h2>
        <>
          <label className={styles.label}>Name:</label>
          <Input className={styles.input} type="text"></Input>
          <p className={styles.errorMessage}>{someError}</p>
        </>
        <>
          <label className={styles.label}>Country:</label>
          <Select options={countriesArr} />
          <p className={styles.errorMessage}>{someError}</p>
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
