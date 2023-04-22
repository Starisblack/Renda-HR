import { Grid } from "@mui/material";
import "./Attendance.css";
import DescContainer from "./DescContainer/DescContainer";
import ImgContainer from "./ImgContainer/ImgContainer";
import calendar from "../../assets/Attendance/Calendar.png";
import graph from "../../assets/Attendance/graph-monitor.png";
import tracking from "../../assets/Attendance/tracking.png";
import { GetStartedBtn } from "../../components/UI/Button/Button";
import fingerprint from "../../assets/Attendance/fingerprint.png";
import setting from "../../assets/Attendance/setting.png";
import CallToAction from "../../components/CallToActions/CallToAction";

const Attendance = () => {
  const trackingDetails = [
    {
      title:
        "Replace your manual biometric trackers with RendaHR, keep your employees away from the stress of manual time-tracking and save thousands of dollars per year.",
      icon: fingerprint,
    },

    {
      title:
        "Configure your own work schedules, attendance cycles etc. RendaHR has geofencing capabilities to cater to your business needs.",
      icon: setting,
    },
  ];

  return (
    <div className="page attendance-page">
      <section id="time-track-container">
        <Grid container gap={{ xs: 8, md: 0 }} spacing={{ md: 2 }}>
          <DescContainer
            title="Time-Track Staff Engagement with Ease."
            desc="Keep track of how your employees and freelance staff spend their
            time through a solid attendance management system."
          />
          <ImgContainer
            img={calendar}
            children={<GetStartedBtn title="Start Tracking" />}
            align="center"
          />
        </Grid>
      </section>

      <section id="at-monitor">
        <Grid container gap={{ xs: 8, md: 0 }} spacing={{ md: 3 }}>
          <ImgContainer img={graph} />
          <DescContainer
            title="Monitor Staff Progress"
            desc="Keep track of how your on-site, remote and on-the-field employees spend their time through a sophisticated yet simple attendance system."
          />
        </Grid>
      </section>

      <section id="at-tracking">
        <Grid container gap={{ xs: 8, md: 0 }} spacing={{ md: 3 }}>
          <DescContainer
            title="Single Time Tracking Tool For 
                Global Teams"
            children={
              <>
                {trackingDetails.map((detail) => {
                  return (
                    <div className="at-tracking-features-box" key={detail.title}>
                      <img style={{height: "37px", width: "37px"}} src={detail.icon} alt={detail.title.substring(0, 20)} />
                      <p>{detail.title}</p>
                    </div>
                  );
                })}
              </>
            }
          />

          <ImgContainer img={tracking} />
        </Grid>
      </section>

      <CallToAction  title="Ready to Simplify and Save Time on Time-Tracking? Join RendaHR" />
    </div>
  );
};

export default Attendance;
