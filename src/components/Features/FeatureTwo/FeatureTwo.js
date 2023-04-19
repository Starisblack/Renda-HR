import "./FeatureTwo.css"
import ImageContent from "../FeaturesCard/ImageContent/ImageContent"
import Description from "../FeaturesCard/Description/Description"
import payroll from "../../../assets/images/payroll.jpg"
import Button from "../../UI/Button/Button"
import OnBoardingModal from "../../OnBoarding/OnBoarding"
import { useState } from "react"
const FeatureTwo = () => {


    const [OnBoarding, setOnBoarding] = useState(false);

    const handleModalClose = () => {
      setOnBoarding(false);
    };


    return (
        <section className="feature-two">
            <div className="row d-flex align-items-center f2-container">

                <div className="col-12 col-lg-6 f2-desc">
                    <Description
                        title="Error free Payroll processing."
                        desc="With our layered payroll approvals, there is possibly no way anyone on your team will make a mistake with your payroll disbursement."
                    />
                  <div style={{marginTop: "40px"}}>

                  <OnBoardingModal open={OnBoarding} handleClose={handleModalClose} />
                  <Button title="Get Started Now" clicked={() => setOnBoarding(!OnBoarding)} />
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                    <ImageContent img={payroll}
                        height="80%"
                        width="80%"
                    />
                </div>

            </div>
        </section>
    )
}

export default FeatureTwo