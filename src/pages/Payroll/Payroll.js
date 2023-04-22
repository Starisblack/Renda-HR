import { useEffect } from "react";
import CallToAction from "../../components/CallToActions/CallToAction";
import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Testimonial from "../../components/Testimonial/Testimonial";
import "./Payroll.css";

const Payroll = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page payroll-page">
      <Hero />
      <Services />
      <Features />
      <Testimonial />
      <CallToAction
        title=" Ready to grow your business? Take your staff Reward a notch higher - The
        RendaHR way."
      />
    </div>
  );
};

export default Payroll;
