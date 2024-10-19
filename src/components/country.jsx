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
const MostSpokenLanguage = (props) => {
  return (
    <></>
  );
    
};
const MostPopulatedCountries = (props) => {
  const topPopulatedCountries = props.countries.sort((a, b) => b.population - a.population);

// Get the top 10 most populated countries
const top10 = topPopulatedCountries.slice(0, 10);
  return (
    <div className='most-puplated-country-wrapper'>
      <div className='buttons'>
                    <button>Population</button> 
                    <button>Languages</button>
                </div>
    <ul className='most-puplated-country'>
      {top10.map((countery, index) => (
        <li key={index}>
         {countery.name}
        </li>
      ))}
      </ul>
    </div>
  );
    
};

export  { Country ,MostPopulatedCountries ,MostSpokenLanguage};
