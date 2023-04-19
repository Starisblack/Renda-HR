import CallToAction from "../../components/CallToActions/CallToAction"
import Features from "../../components/Features/Features"
import Hero from "../../components/Hero/Hero"
import Services from "../../components/Services/Services"
import Testimonial from "../../components/Testimonial/Testimonial"
import "./Payroll.css"


const Payroll = () => {
  return (
    <div className="page">
         <Hero />
         <Services />
         <Features />
         <Testimonial />
         <CallToAction />
    </div>
  )
}

export default Payroll