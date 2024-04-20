import Home from './components/Home'
import Login from './components/Login'
import Connect from './components/Connect'
import Register from './components/Register'
import Forgotpassword from './components/ForgotPassword'
import PasswordReset from './components/PasswordReset'
import FAQPage from './components/FAQPage'
import AboutUs from './components/Aboutus'
import Contact from './components/Contact'
import {Routes,Route} from 'react-router-dom'
import NotFound from './components/NotFound'
import './App.css';
import SearchExplore from './components/SearchExplore'


function App() {
  return (
    <>
    <div className='bg'>
      <Routes>  
        <Route path='/' element={<Home/>}></Route>
        <Route path='/SearchExplore' element={<SearchExplore/>}></Route>
        <Route path='/FAQPage' element={<FAQPage/>}></Route>
        <Route path='/Connect' element={<Connect/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/password-reset' element={<PasswordReset/>}></Route>
        <Route path='/forgotpassword/:id/:token' element={<Forgotpassword/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>        
      </Routes>
      </div>
    </>
  );
}

export default App;
