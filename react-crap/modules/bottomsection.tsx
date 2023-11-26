import ItemBlock from "./item";
import PageOptions from "./select";
import Pagination from "./pagination";
import ResultsBlock from "./products";
import { useAppSelector } from "@/store/hooks/appHooks";
import {
  selectItemId,
  selectItemsPerPage,
  selectPage,
} from "@/store/reducers/viewMode";
import { selectSearchValue } from "@/store/reducers/search";
import { productParams, responseInterface } from "@/types/Interfaces";

const BottomSection = (props: responseInterface) => {
  const { products, limit = 5, total = 100 } = props;

  return (
    <section className="bottom-section">
      <div className="search-page">
        {products && total > 0 && <PageOptions></PageOptions>}
        {products && <ResultsBlock {...products}></ResultsBlock>}
        {products && limit < total && <Pagination></Pagination>}
      </div>
    </section>
  );
};

export default BottomSection;
