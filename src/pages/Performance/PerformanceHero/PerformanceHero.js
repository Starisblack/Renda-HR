import { Grid } from "@mui/material";
import "./PerformanceHero.css";
import Button from "../../../components/UI/Button/Button";
import hero from "../../../assets/images/performanceImgs/hero.png";
import { useState } from "react";
import OnBoardingModal from "../../../components/OnBoarding/OnBoarding";

const PerformanceHero = () => {

  const [OnBoarding, setOnBoarding] = useState(false);

  const handleModalClose = () => {
    setOnBoarding(false);
  };


  return (
    <section id="performanceHero">
    <OnBoardingModal open={OnBoarding} handleClose={handleModalClose} />
      <Grid container >
        <Grid item xs={12} md={6}  className="pm-desc-container">
          <h1 className="pm-hero-title">Challenge your people for Improved performance.</h1>
          <p className="pm-hero-desc">Create a culture and work environment that attracts demanding and hungry young talents.</p>
          <Button title="Get Started" clicked={() => setOnBoarding(!OnBoarding)}/>
        </Grid>

        <Grid item xs={12} md={6}>
            <div className="pm-hero-img-container">
                <img className="pm-hero-img" src={hero} alt="renda hr" />
            </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default PerformanceHero;