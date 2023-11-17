import styles from './products.module.scss';
import { useNavigate } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
} from '../../common/redux/hooks/appHooks';
import {
  selectItemsPerPage,
  selectPage,
  setItemId,
} from '../../common/redux/reducers/viewMode';
import { selectSearchValue } from '../../common/redux/reducers/search';
import { useGetResultsQuery } from '../../common/API/apiService';
import { productParams } from '../../types/Interfaces';

const ResultsBlock = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { page } = useContext(AppContext);
  // const { searchStr } = useContext(ApiContext);

  // const { setItem, setIsItem, products, setIsLoading } = useContext(ApiContext);

  const searchValue = useAppSelector(selectSearchValue);
  const itemsPerPage = useAppSelector(selectItemsPerPage);
  const page = useAppSelector(selectPage);
  const { data } = useGetResultsQuery({
    searchValue,
    itemsPerPage,
    page,
  });
  const products = data?.products;

  const handleItem = async (id: number) => {
    try {
      // setIsLoading(true);
      // const itemData = await getItemFromApi(id);
      dispatch(setItemId(id));
      navigate(`../?search=${searchValue}&page=${page}&id=${id}`);
    } catch (error) {
      throw new Error('failed to load item from API');
    }
  };

  return (
    <div className={styles.resultsBlock}>
      {products &&
        products.length > 0 &&
        products.map((params: productParams, index: number) => (
          <div key={index} className={styles.itemBlock} data-testid="card">
            <h3 className={styles.header} data-testid="card-header">
              {params.title}
            </h3>
            <img
              className={styles.img}
              src={params.thumbnail}
              data-testid="card-image"
              alt={`${params.title} image`}
            ></img>
            <div className={styles.params}>
              <p className={styles.property} data-testid="card-category">
                Category: {params.category}
              </p>
              <p className={styles.property} data-testid="card-property">
                Price: {Math.round(params.price).toString()}${' '}
                {`(-${params.discountPercentage.toString()}%)`}
              </p>
            </div>
            <p
              className={styles.link}
              data-testid="card-link"
              onClick={() => handleItem(params.id)}
            >
              See more
            </p>
          </div>
        ))}

      {!products && (
        <div className={styles.error} data-testid="no_results">
          No products with this params!
        </div>
      )}
    </div>
  );
};

export default ResultsBlock;
