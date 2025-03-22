import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import CountryInfo from '../components/CountryInfo/CountryInfo'
import { useEffect, useState } from 'react';
import { fetchCountry } from '../service/countryApi'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'
import Loader from '../components/Loader/Loader'
import { useParams } from 'react-router-dom';

const Country = () => {
  const [country, setCountry] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const { countryId } = useParams();

  useEffect(() => {
    if (!countryId) return;
    async function getCountryById() {
      try {
        setError(false);
        setLoader(true);
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (err) {
        setError(err)
      } finally {
        setLoader(false);
      }
      
    }
    getCountryById();
  },[countryId]);

  return (
    <Section>
      <Container>
        {error && <ErrorMessage />}
        {loader && <Loader/>}
        <CountryInfo country={country} />
      </Container>
    </Section>
  );
};

export default Country;
