
import './App.css';
import A from './components/A';
import BookAppointment from './components/BookAppointment';
import FindDoctor from './components/FindDoctor';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Specialists from './components/Specialists';
import TestimonialSection from './components/TestimonialSection';
import WorkProcess from './components/WorkProcess';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <Specialists/>
    <WorkProcess/>
    <FindDoctor/>
    <TestimonialSection/>
    
<Services/>
<BookAppointment/>
  <A/>
    </div>
  );
}

export default App;
