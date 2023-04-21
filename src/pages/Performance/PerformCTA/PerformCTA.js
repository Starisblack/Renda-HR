import "./PerformCTA.css";
import Button from "../../../components/UI/Button/Button";
import AccordionCard from "../../../components/Accordion/Accordion";
import { Grid } from "@mui/material";


const PerformCTA = () => {


  const accordionTitles = [
    "Competency Management",
    "Objectives and Key Results",
    "Performance Reports",
  ];

  return (
    <div id="pm-cta">
      <Grid container>
      
        <Grid item xs={12} md={6} className="pm-cta-left-container">
          <h2>Transform your team management process</h2>
          <p className="pm-left-text">
            Keep track of your team’s contribution to your work force from a
            single dashboard.{" "}
          </p>
          <Button
            title="Get started"
            link="https://renda-hr.netlify.app/get-started"
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
