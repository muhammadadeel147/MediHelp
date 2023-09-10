
import './App.css';
// import A from './components/A';
// import BookAppointment from './components/BookAppointment';
// import FindDoctor from './components/FindDoctor';
// import Hero from './components/Hero';
 import Navbar from './components/Navbar';
// import Services from './components/Services';
// import Specialists from './components/Specialists';
// import TestimonialSection from './components/TestimonialSection';
// import WorkProcess from './components/WorkProcess';
 import MentalHealthVideos from './page/Mentalhealth';
// import Survey from './utils/Survey';
import {Route,Routes,} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Services from './components/Services';
function App() {
  return (
    <div className="App">
  <Navbar/>
    
  <Routes>
  <Route path="/" element={<Home/>} />
       
        <Route path="/mentalhealth" element={<MentalHealthVideos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    </div>
  );
}

export default App;
