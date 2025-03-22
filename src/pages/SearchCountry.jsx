import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import SearchForm from '../components/SearchForm/SearchForm';
import Section from '../components/Section/Section';
import {fetchByRegion} from '../service/countryApi'
import CountryList from '../components/CountryList/CountryList';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'
import Loader from '../components/Loader/Loader'
import { useSearchParams } from 'react-router-dom';

const SearchCountry = () => {
  const [countries, setСountries] = useState([]);
  const [searchRegion, setSearchRegion] = useSearchParams();
  const counrty = searchRegion.get('country' ?? '');
  
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const handledSubmit = (currentRegio) => {
    setSearchRegion({ 'country': currentRegio })
  };

  useEffect(() => {
    if (!counrty) return;
    async function getByRegion() {
      try {
        setError(false);
        setLoader(true);

        const currentRegio = await fetchByRegion(counrty);
        setСountries(currentRegio)
        setLoader(false);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getByRegion();
  }, [counrty])
 

  return (
    <Section>
      <Container>
        {error && <ErrorMessage />}
        {loader && <Loader/>}
        <SearchForm onSubmit={handledSubmit} />
        <CountryList countries={countries}/>
      </Container>
    </Section>
  );
};

export default SearchCountry;
