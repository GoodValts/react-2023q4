import styles from './selectForms.module.scss';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import {
  selectCommonAge,
  selectCommonCountry,
  selectCommonGender,
  selectCommonMail,
  selectCommonName,
  selectCommonPhoto,
} from '../../store/reducers/commonFormSlice';
import { convertFromBase64 } from '../forms/data/converterBase64';
import {
  selectReactAge,
  selectReactCountry,
  selectReactGender,
  selectReactMail,
  selectReactName,
  selectReactPhoto,
} from '../../store/reducers/reactFormSlice';

const SelectForms = () => {
  const navTo = useNavigate();

  const commonName = useAppSelector(selectCommonName);
  const commonAge = useAppSelector(selectCommonAge);
  const commonEmail = useAppSelector(selectCommonMail);
  const commonGender = useAppSelector(selectCommonGender);
  const commonPhoto = useAppSelector(selectCommonPhoto);
  const commonCountry = useAppSelector(selectCommonCountry);

  const reactName = useAppSelector(selectReactName);
  const reactAge = useAppSelector(selectReactAge);
  const reactEmail = useAppSelector(selectReactMail);
  const reactGender = useAppSelector(selectReactGender);
  const reactPhoto = useAppSelector(selectReactPhoto);
  const reactCountry = useAppSelector(selectReactCountry);

  const routeToCommonForm = () => {
    navTo('commonForm');
  };

  const routeToReactForm = () => {
    navTo('reactForm');
  };

  return (
    <div className="flex">
      <section>
        <button className={styles.button} onClick={routeToCommonForm}>
          Common form
        </button>
        {commonName &&
          commonAge &&
          commonEmail &&
          commonGender &&
          commonPhoto &&
          commonCountry && (
            <div
              className={`${styles.cardCommon} ${
                commonGender === 'male'
                  ? styles.male
                  : commonGender === 'female'
                    ? styles.female
                    : ''
              }`}
            >
              <div className={styles.imageContainer}>
                <img
                  src={convertFromBase64(commonPhoto)}
                  alt={`${commonName} photo`}
                  className={styles.image}
                />
              </div>
              <h3
                className={`${styles.header} ${
                  commonGender === 'male'
                    ? styles.male
                    : commonGender === 'female'
                      ? styles.female
                      : ''
                }`}
              >
                {commonName}, {`${commonAge?.toString()} y.o.`}
              </h3>
              <p
                className={`${styles.paragraph} ${
                  commonGender === 'male'
                    ? styles.male
                    : commonGender === 'female'
                      ? styles.female
                      : ''
                }`}
              >{`From ${commonCountry}`}</p>
              <a
                className={`${styles.link} ${
                  commonGender === 'male'
                    ? styles.male
                    : commonGender === 'female'
                      ? styles.female
                      : ''
                }`}
                href={`mailto::${commonEmail}`}
              >
                Click to mail
              </a>
            </div>
          )}
      </section>
      <section>
        <button className={styles.button} onClick={routeToReactForm}>
          React form
        </button>
        {reactName &&
          reactAge &&
          reactEmail &&
          reactGender &&
          reactPhoto &&
          reactCountry && (
            <div
              className={`${styles.card} ${
                reactGender === 'male'
                  ? styles.male
                  : reactGender === 'female'
                    ? styles.female
                    : ''
              }`}
            >
              <div className={styles.imageContainer}>
                <img
                  src={convertFromBase64(reactPhoto)}
                  alt={`${reactName} photo`}
                  className={styles.image}
                />
              </div>
              <h3
                className={`${styles.header} ${
                  reactGender === 'male'
                    ? styles.male
                    : reactGender === 'female'
                      ? styles.female
                      : ''
                }`}
              >
                {reactName}, {`${reactAge?.toString()} y.o.`}
              </h3>
              <p
                className={`${styles.paragraph} ${
                  reactGender === 'male'
                    ? styles.male
                    : reactGender === 'female'
                      ? styles.female
                      : ''
                }`}
              >{`From ${reactCountry}`}</p>
              <a
                className={`${styles.link} ${
                  reactGender === 'male'
                    ? styles.male
                    : reactGender === 'female'
                      ? styles.female
                      : ''
                }`}
                href={`mailto::${reactEmail}`}
              >
                Click to mail
              </a>
            </div>
          )}
      </section>
    </div>
  );
};

export default SelectForms;
