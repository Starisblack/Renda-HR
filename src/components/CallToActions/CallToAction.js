import Button from "../UI/Button/Button";
import "./CallToAction.css";

const CallToAction = ({title}) => {
  return (
    <div className="callToAction">
      <h1>
       {title}
      </h1>
      <Button
        title="Get Started For Free"
        link="https://renda-hr.netlify.app/get-started"
      />
    </div>
  );
};

export default CallToAction;
