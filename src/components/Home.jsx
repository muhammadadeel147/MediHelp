import React from 'react'
import Hero from "../components/Hero"
import FindDoctor from "../components/FindDoctor"
import Specialists from "../components/Specialists"
import BookAppointment from "../components/BookAppointment"
import Services from "../components/Services"
import WorkProcess from "../components/WorkProcess"
import TestimonialSection from "../components/TestimonialSection"
const Home = () => {
  return (
    <div>
        <Hero/>
        <Specialists/>
        <WorkProcess/>
      
        <FindDoctor/>
        <Services/>
        <TestimonialSection/>
        <BookAppointment/>
    </div>
  )
}

export default Home