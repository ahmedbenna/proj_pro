import './App.css';
import NavGuest from './comp/nav/guest/NavGuest';
import Login from './comp/auth/client/Login.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './comp/Home/Home.js'
import Signup from './comp/auth/client/Signup';
function App() {
  return (
    <div >
  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/loginClient' element={<Login/>}/>
          <Route path='/signupClient' element={<Signup/>}/>
        </Routes>
       

      </BrowserRouter>
    </div>
  );
}

export default App;
