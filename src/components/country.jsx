import '../styles/country_style.css';
import { Line } from 'rc-progress';

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
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
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
  const totalPopulation = props.countries.reduce((total, country) => total + country.population, 0);


// Get the top 10 most populated countries
const top10 = topPopulatedCountries.slice(0, 10);
  return (
    <div className='most-puplated-country-wrapper'>
      <div className='buttons'>
                    <button>Population</button> 
                    <button>Languages</button>
                </div>
      <div className='most-puplated-country'>
        <p>Africa &nbsp;&nbsp; <Line className='progress-line'
                        percent={100}
                        strokewidth="2"
                        strokeColor="lightgreen"
                        trailwidth="2"
                        strokeLinecap="square"
        />&nbsp;&nbsp;{totalPopulation.toLocaleString()}
        </p>
      {top10.map((country, index) => (
        <div className='most-puplated-country-list' key={index}>
          <span>{country.name}</span>&nbsp;&nbsp;
          <Line className='progress-line'
                        percent={(country.population/totalPopulation)*100}
                        strokewidth="2"
                        strokeColor="lightgreen"
                        trailwidth="2"
                        strokeLinecap="square"
          />
          &nbsp;&nbsp;
          <span>{country.population.toLocaleString()}</span>
        </div>
      ))}
      </div>
    </div>
  );
    
};

export  { Country ,MostPopulatedCountries ,MostSpokenLanguage};
