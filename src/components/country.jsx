import '../styles/country_style.css';


const Country = ({ country, index }) => {
  return (
    <div kry={index} className="country-continier">
      <img
        src={country.flagurl}
        alt=""
        style={{ width: 250, hieght: "auto" }}
      />

      <h2>{country.name}</h2>
      <div className='country-info'>
      <p><strong>Capital: </strong>{country.capital}</p>
      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>Languages:</strong> {country.language}</p>
      <p><strong>Currency:</strong> {country.currency}</p>
    </div>
    </div>
  );
};
export default Country;
