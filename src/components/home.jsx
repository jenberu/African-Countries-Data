import '../styles/home_style.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Country ,MostPopulatedCountries} from './country';

const Home = (props) => {
    // Use useState to store and update data
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
   

    const getCountries = async () => {
       const url = "https://restcountries.com/v3.1/region/africa";

        try {
            const response = await axios.get(url);
            const countryData = response.data.map(country => ({
                name: country.name.common,
                capital: country.capital ? country.capital[0] : 'No Capital',
                population: country.population,
                language: Object.values(country.languages || {}).join(', '),
                currency: Object.values(country.currencies || {}).map(curr => curr.name).join(', '),
                flagurl:country.flags.svg
            }));
            const sortedCountryData = countryData.sort((a, b) => a.name.localeCompare(b.name));
            setCountries(sortedCountryData);
            setFilteredCountries(sortedCountryData);
            setLoading(false); // Turn off loading
        } catch (error) {
            console.error("Error fetching country data", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getCountries();  // Fetch the data once when the component mounts
    }, []);
    const handleChange = (e) => {
        const { value } = e.target;
        setSearchTerm(value);//update the seaarch term state
        // Filter countries based on the search term
        const filterd = countries.filter(country =>
            country.name.toLowerCase().includes(value.toLowerCase())
        );
        
        setFilteredCountries(filterd);

    };
   
    return (
        <div className="home-page-wrapper">
            <h1>African Countries Data</h1>
            <h2>Currently, We have {countries.length} countries </h2>

            {searchTerm && <p className='number-search'>{ filteredCountries.length}  satisfied the search criteria</p>}
            <p><input type='text' name='search'
                placeholder='Search countries by name'
                onChange={handleChange}
            /></p>
            
            {/* Display loading message if data is being fetched */}
            {loading ? <p>Loading...</p> : <div className='main-wrapper'>

                <div className='country-continier-wrapper'>

                    {filteredCountries.map((country, index) => (

                            <Country country={country} index={index} />
                            
            
        ))}
      </div>
        
              <MostPopulatedCountries countries={countries}/>

            </div>}

        </div>
    );
};

export default Home;
