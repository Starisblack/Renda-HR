import Button from "../UI/Button/Button";
import "./CallToAction.css";
import OnBoardingModal from "../OnBoarding/OnBoarding";
import { useState } from "react";

const CallToAction = () => {
  const [OnBoarding, setOnBoarding] = useState(false);

  const handleModalClose = () => {
    setOnBoarding(false);
  };


  return (
    <div className="callToAction">
      <h1>
        Ready to grow your business? Take your staff Reward a notch higher - The
        RendaHR way.
      </h1>
      
        <OnBoardingModal open={OnBoarding} handleClose={handleModalClose} />
        <Button title="Get Started For Free" clicked={() => setOnBoarding(!OnBoarding)} />
      
    </div>
  );
};

export default CallToAction;
