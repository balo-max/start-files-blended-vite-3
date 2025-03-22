import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import CounryList from '../components/CountryList/CountryList.jsx'
import { useEffect, useState } from 'react';
import {getCountries} from '../service/countryApi.js'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.jsx';
import Loader from '../components/Loader/Loader'

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function fetchCountries() {
      try {
        setError(false)
        setLoader(true);
        const countries = await getCountries();
        setCountries(countries);
      } catch (err) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    fetchCountries();
  },[])

  return (
    <Section>
      <Container>
        {error && <ErrorMessage />}
        {loader && <Loader/>}
        {countries.length !== 0 && <CounryList countries={countries} />}
      </Container>
    </Section>
  );
};
export default Home;
