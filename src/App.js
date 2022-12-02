import './App.css';
import NavGuest from './comp/nav/guest/NavGuest';
import Login from './comp/auth/client/Login.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './comp/Home/Home.js'
import Signup from './comp/auth/client/Signup';
import SearchResult from './pages/SearchResult';
import Footer from './comp/Footer';
import About from './pages/About';
import Single from './pages/Single';
import Team from './pages/Team';
import Services from './pages/Services';
import Protfolio from './pages/Protfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
function App() {
  return (
    <div >

      <BrowserRouter>
        <NavGuest />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/loginClient' element={<Login />} />
          <Route path='/signupClient' element={<Signup />} />
          <Route path='/searchResult' element={<SearchResult />} />
          <Route path='/about' element={<About />} />
          <Route path='/single' element={<Single />} />
          <Route path='/team' element={<Team />} />
          <Route path='/services' element={<Services />} />
          <Route path='/protfolio' element={<Protfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
