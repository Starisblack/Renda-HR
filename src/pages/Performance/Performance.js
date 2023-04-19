import Hero from "./PerformanceHero/PerformanceHero";
import "./Performance.css";
import PServices from "./PServices/PServices";
import PerformCTA from "./PerformCTA/PerformCTA";
import CallToAction from "../../components/CallToActions/CallToAction";

const Performance = () => {
  return (
    <div className="page performance-page">
      <Hero />
      <PServices />
      <section id="pm-call-actions">
        <PerformCTA />
        <CallToAction />
      </section>
    </div>
  );
};

export default Performance;
