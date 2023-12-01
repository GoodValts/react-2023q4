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
// import photo from '../../../public/Elbrus2016-111.jpg';
import { selectReactName } from '../../store/reducers/reactFormSlice';

const SelectForms = () => {
  const navTo = useNavigate();

  const commonName = useAppSelector(selectCommonName);
  const commonAge = useAppSelector(selectCommonAge);
  const commonEmail = useAppSelector(selectCommonMail);
  const commonGender = useAppSelector(selectCommonGender);
  const commonPhoto = useAppSelector(selectCommonPhoto);
  const commonCountry = useAppSelector(selectCommonCountry);

  const reactName = useAppSelector(selectReactName);

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
                {/* <img
                    src={photo}
                    alt={`${commonName} photo`}
                    className={styles.image}
                  /> */}
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
        {reactName && <div className={styles.card}></div>}
      </section>
    </div>
  );
};

export default SelectForms;
