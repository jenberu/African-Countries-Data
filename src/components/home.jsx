import '../styles/home_style.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = (props) => {
    // Use useState to store and update data
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        
        try {
            const response = await axios.get("https://api.thecatapi.com/v1/images/search?breed_id=abys");
            setData(response.data);  // Update the data state
            setLoading(false); // Turn off loading
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();  // Fetch the data once when the component mounts
    }, []);

    return (
        <div className="home-page-wrapper">
            <h1>Jemberu's 30 Day React Challenge</h1>
            <h1>Cats Paradise</h1>
            
            {/* Display loading message if data is being fetched */}
            {loading ? <p>Loading...</p> : <div>
                <p>id: {data[0].id}</p>
                <img src={data[0].url} alt={data[0].id} style={{ width: '300px', height: '300px' }} />
                <p>Width: {data[0].width}px</p>
                <p>Height: {data[0].height}px</p>
                <h2>There are {data.length} cat breeds</h2>
                    
            </div>}

        </div>
    );
};

export default Home;
