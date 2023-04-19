import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./OnBoarding.css";
import Logo from "../Logo/Logo";
import corehr from "../../assets/onboardIcons/corehr.png";
import payroll from "../../assets/onboardIcons/payr.png";
import talent from "../../assets/onboardIcons/talent.png";
import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  //   boxShadow: 24,
};

const OnBoardingModal = ({ open, handleClose }) => {
  const onboardingDetails = [
    {
      icon: talent,
      title: "Talent Sourcing",
      desc: "Hire the best talent with barely any effort. We’ve taken care of everything for you. Sit back and relax.",
    },

    {
      icon: corehr,
      title: "CoreHR System",
      desc: "Our system lets you focus on strategic HR by letting you automate much of your employee life-cycle processes - from hire through to exit.",
    },

    {
      icon: payroll,
      title: "Payroll Management",
      desc: "Prepare payroll auto-magically and never lose an employee over delays or payroll mistakes.",
    },
  ];

  return (
    <div className="on-boarding-container">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal-container">
          <Logo height="50px" />
          <h1 className="modal-title">
            Help us give you the best experience 🥳
          </h1>
          <p className="sub-title">What brings you to RendaHR?</p>

          <div className="on-boarding-services row">
            {onboardingDetails.map((detail) => {
              return (
                <div
                  key={detail.title}
                  className="on-boarding-card col-sm-5 col-md-5 col-lg-3"
                >
                  <Link onClick={handleClose} to="/">
                    <div>
                      <img src={detail.icon} alt={detail.title} />
                    </div>

                    <div>
                      <p className="boarding-card-title">{detail.title}</p>
                      <p className="boarding-card-desc">{detail.desc}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          <Button
            onClick={handleClose}
            className="back-home-btn"
            variant="contained"
            endIcon={<EastIcon />}
          >
            Back to home
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default OnBoardingModal;
