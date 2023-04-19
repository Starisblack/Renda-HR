import { useEffect } from "react";
import PricePageCTA from "../../components/CallToActions/PricePageCTA/PricePageCTA";
import { Faq } from "../../components/FAQ/Faq";
import { Pricinginfo } from "../../components/PricingInfo/Pricinginfo";
import PriceTableCard from "./PriceTableCard/PriceTableCard";
import "./Pricing.css";
import { useLocation } from "react-router-dom";

const Pricing = () => {
  const { hash } = useLocation();

  useEffect(() => {
    const elementToScroll = document.getElementById(hash?.replace("#", ""));

    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({
        top: elementToScroll.offsetTop - 0,
        behavior: "smooth",
      });
    }

    // window.scrollTo(0, 0);
    // const element = document.getElementById("faqs");
    // if (hash === "") {
    //   window.scrollTo(0, 0);
    // } else if (element) {
    //   element.scrollIntoView({ behavior: "smooth" });
    // }
  }, [hash]);

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

      <div id="faqs" className="faq-container">
        <Faq />
      </div>
    </div>
  );
};

export default Pricing;
