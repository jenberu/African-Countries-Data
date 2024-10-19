import '../styles/home_style.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Country from './country';

const Home = (props) => {
    // Use useState to store and update data
    const [countries, setCountries] = useState([]);
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
            setCountries(countryData);  // Update the data state
            setLoading(false); // Turn off loading
        } catch (error) {
            console.error("Error fetching country data", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getCountries();  // Fetch the data once when the component mounts
    }, []);

    return (
        <div className="home-page-wrapper">
            <h1>African Countries Data</h1>
            <p></p>
            <p><input type='text' name='search' placeholder='Search countries by name' /></p>
            
            {/* Display loading message if data is being fetched */}
            {loading ? <p>Loading...</p> : <div>
                <h2>Currently, We have {countries.length} countries </h2>

                <div className='country-continier-wrapper'>

                    {countries.map((country, index) => (

                            <Country country={country} index={index} />
                            
            
        ))}
      </div>
                    
            </div>}

        </div>
    );
};

export default Home;
