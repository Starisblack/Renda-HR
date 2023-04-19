import { Grid } from "@mui/material";
import PricingCard from "./PricingCard/PricingCard";
import "./Pricinginfo.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const Pricinginfo = () => {
  const pricingDetails = [
    "Start for free, up to 10 employees",
    "40+ features, full HR lifecycle",
    "No card required",
  ];

  const pricingTableData = [
    {
      title: "Essential",
      desc: "For companies who want to centralize and run HR auto-magically.",
      subTitle: "Free forever for 10 employees.",
      featureNum: 10,
      features: [
        "Core HR",
        "Time Off & Attendance",
        "Remote onboarding",
        "Recruitment",
        "Payroll",
      ],
    },
    {
      title: "Perform",
      desc: "For companies who want to centralize and run HR auto-magically.",
      subTitle: "From N4,000 / Employee/ Month.",
      featureNum: 30,
      features: [
        "Self, Manager & Peer Review",
        "Time Off & Attendance",
        "Remote onboarding",
        "Payslips",
        "Payroll",
      ],
    },

    {
      title: "Boost",
      desc: "For companies who want to centralize and run HR auto- magically.",
      subTitle: "From N6000 / Employee / Month.",
      featureNum: 50,
      features: [
        "Payroll Handling,Taxes & Deductions",
        "Compliance Document Collection",
        "Onboarding & Offboarding",
        "Bonus & Expense Management",
        "People Directories & Profiles",
      ],
    },
  ];

  return (
    <div className="pricing-info">
      <div className="text-center">
        <h1>Scale better with the right plan</h1>
      </div>
      <div className="pricing-details-box">
        {pricingDetails.map((detail) => {
          return (
            <p key={detail}>
              <CheckCircleIcon sx={{ fontSize: 20 }} /> {detail}
            </p>
          );
        })}
      </div>

      <Grid container gap={3} columns={{sm: 12, md: 12}} className="pricing-table-container">
        {pricingTableData.map((table) => {
          return (
            <Grid key={table.title} item xs={4} sm={4} md={3}>
              <PricingCard
                title={table.title}
                subTitle={table.subTitle}
                desc={table.desc}
                num={table.featureNum}
                features={table.features}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
