import Grid from '../Grid/Grid'
import GridItem from '../GridItem/GridItem'

const CountryList = ({ countries }) => {

  return (
    <Grid>
      {countries.map((country) => (
        <GridItem key={country.id} country={country} />
      ))}
    </Grid>
  );
};
export default CountryList;
