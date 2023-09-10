
import './App.css';
import BookAppointment from './components/BookAppointment';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Specialists from './components/Specialists';
import WorkProcess from './components/WorkProcess';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <Specialists/>
    <WorkProcess/>
    <BookAppointment/>
<Services/>
  
    </div>
  );
}

export default App;
