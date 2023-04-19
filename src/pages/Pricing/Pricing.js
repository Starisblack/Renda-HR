import PricePageCTA from "../../components/CallToActions/PricePageCTA/PricePageCTA";
import { Faq } from "../../components/FAQ/Faq";
import { Pricinginfo } from "../../components/PricingInfo/Pricinginfo";
import PriceTableCard from "./PriceTableCard/PriceTableCard";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="page pricing-page">
      <div className="pricing-container">
        <Pricinginfo />
        <PricePageCTA />
      </div>
      <div className="pricing-plans-container">
        <div className="pricing-table">
          <PriceTableCard />
        </div>
      </div>

      <div className="faq-container">
        
        <Faq />
      </div>
    </div>
  );
};

export default Pricing;
