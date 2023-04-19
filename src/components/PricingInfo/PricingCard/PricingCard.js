import "./PricingCard.css";

const PricingCard = ({ title, subTitle, desc, num, features }) => {
  return (
    <div className="pricing-card">
      <h3>{title}</h3>
      <p className="price-desc">{desc}</p>

      <p className="price-title">{subTitle}</p>

      <button className="pricing-btn">Start for free</button>

      <p>{num}+ features, including:</p>
      <ul>
        {features.map((feature) => {
          return <li key={feature}>{feature}</li>;
        })}
      </ul>

      <p>See all features</p>
    </div>
  );
};

export default PricingCard;
