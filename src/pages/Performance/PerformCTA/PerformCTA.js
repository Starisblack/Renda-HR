import "./PerformCTA.css";
import Button from "../../../components/UI/Button/Button";
import AccordionCard from "../../../components/Accordion/Accordion";
import { Grid } from "@mui/material";
import { useState } from "react";
import OnBoardingModal from "../../../components/OnBoarding/OnBoarding";

const PerformCTA = () => {
  const [OnBoarding, setOnBoarding] = useState(false);

  const handleModalClose = () => {
    setOnBoarding(false);
  };

  const accordionTitles = [
    "Competency Management",
    "Objectives and Key Results",
    "Performance Reports",
  ];

  return (
    <div id="pm-cta">
      <Grid container>
        <OnBoardingModal open={OnBoarding} handleClose={handleModalClose} />
        <Grid item xs={12} md={6} className="pm-cta-left-container">
          <h2>Transform your team management process</h2>
          <p className="pm-left-text">
            Keep track of your team’s contribution to your work force from a
            single dashboard.{" "}
          </p>
          <Button
            title="Get started"
            clicked={() => setOnBoarding(!OnBoarding)}
          />
        </Grid>

        <Grid item xs={12} md={6} className="pm-cta-right-container">
          {accordionTitles.map((title) => {
            return <AccordionCard key={title} title={title} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default PerformCTA;
