import './App.css';
import Header from './header/header';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Home from './components/home';
import Footer from './footer/footer';
import Login from './components/login';
import Signup from './components/register';
import { MostPopulatedCountries } from './components/country';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home className="home-component" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />


      </Routes>
      <Footer/>
        
    </div>
  );
}

export default App;
