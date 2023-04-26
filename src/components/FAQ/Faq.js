import { Grid } from "@mui/material";
import "./Faq.css";

export const Faq = () => {
  return (
    <Grid container gap={2} className="faq-box">
      <Grid item xs={12} md={12}>
        <h3>FAQS</h3>
      </Grid>
      <Grid item md={5} className="left-faq-box">
        <div>
          <p className="faq-title">1. Is the Inspire plan really free?</p>
          <p className="faq-desc">
            Yes, the Inspire plan is free with up to 10 active employees.
          </p>
        </div>
        <div></div>
      </Grid>

      <Grid item md={5} className="right-faq-box">
        <p className="faq-title">
          {" "}
          2. What are the available payment methods?{" "}
        </p>
        <p className="faq-desc">
          You can use both debit and credit cards. You can also pay via the virtual 
          account no provided for your on your account dashboard. 
        </p>
      </Grid>

      <Grid item md={5} className="right-faq-box">
        <p className="faq-title">3. How does billings work?</p>
        <p className="faq-desc">
          RendaHR is a pay-as-you-go service. For the first payment, you will be
          charged based on the activated employees you import into our system.
          As you go, the recurring payments will automatically be processed
          based on the number of employees who can log into RendaHR.
        </p>
      </Grid>

      <Grid item md={5} className="left-faq-box">
        <p className="faq-title">
          4. What happens if I add more employees than my initial subscription?
        </p>
        <p className="faq-desc">
          RendaHR is a pay-as-you-go service. For the first payment, you will be
          charged based on the activated employees you import into the system.
          As you go, the recurring payments will automatically be processed
          based on the number of employees who can log into RendaHR.
        </p>
      </Grid>
    </Grid>
  );
};
