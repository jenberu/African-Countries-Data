import './App.css';
import Header from './header/header';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Home from './components/home';
import Footer from './footer/footer';
import Login from './components/login';
import Signup from './components/register';
import AboutMe from './components/about';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/African-Countries-Data" element={<Home className="home-component" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/about" element={<AboutMe />} />



      </Routes>
      <Footer/>
        
    </div>
  );
}

export default App;
