import Button from "../UI/Button/Button";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <div className="callToAction">
      <h1>
        Ready to grow your business? Take your staff Reward a notch higher - The
        RendaHR way.
      </h1>
      <Button
        title="Get Started For Free"
        link="http://app.joinrenda.com/register"
      />
    </div>
  );
};

export default CallToAction;
