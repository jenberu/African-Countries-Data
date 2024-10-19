import '../styles/country_style.css';


const Country = ({ country, index }) => {
  return (
    <div kry={index} className="country-continier">
      <img
        src={country.flagurl}
        alt=""
        style={{ width: 200, hieght: "auto" }}
      />

      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Languages: {country.language}</p>
      <p>Currency: {country.currency}</p>
    </div>
  );
};
export default Country;
