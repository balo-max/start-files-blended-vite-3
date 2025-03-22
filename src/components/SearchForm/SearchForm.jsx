import { FiSearch } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';
import styles from './SearchForm.module.css'

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

const SearchForm = ({onSubmit}) => {

  const handledSubmit = (e) => {
    e.preventDefault();

    const currentOption = e.target.elements.region.value;

    if (currentOption === 'default') {
      return toast.error('Please select a region.');
    }

    onSubmit(currentOption);
  }

  return <>
    <form className={styles.form} onSubmit={handledSubmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        aria-label="select"
        className={styles.select}
        name="region"
        required
        defaultValue="default"
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map((region) => (
          <option key={region.id} value={region.value}>{region.name}</option>))}
      </select>
    </form>
    <Toaster/>
  </>;
};

export default SearchForm;
