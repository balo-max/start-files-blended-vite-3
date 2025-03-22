import { Link } from 'react-router-dom';
import style from './GridItem.module.css';
import { useLocation } from 'react-router-dom';

const GridItem = ({ country }) => {

const location = useLocation();

  return <li className={style.item}>
    <Link to={`/country/${country.id}`} state={location}>
    <img src={country.flag} alt={country.capital} />
    </Link>
  </li>;
};
export default GridItem;
