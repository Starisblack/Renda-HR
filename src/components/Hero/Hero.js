import "./Hero.css"
import ellipse1 from "../../assets/images/Ellipse 3.png"
import ellipse2 from "../../assets/images/Ellipse 4.png"
import ellipse3 from "../../assets/images/Ellipse 5.png"
import hero from "../../assets/images/Hero.jpg"
import Button from "../UI/Button/Button"
import arrow from "../../assets/images/arrow.png"
import heromobile from "../../assets/images/hero-mobile.jpg"


const Hero = () => {



    return (
        <section id="hero">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h1>Process Payroll Quickly, Accurately and with Precision on RendaHR</h1>
                    <p>Pay your people on time, every time, without losing your Mind.</p>

                    <div style={{ marginTop: "29px" }}>
                        <Button title="Start Paying Now" icon={arrow} link="https://renda-hr.netlify.app/get-started" />
                    </div>
                    <div className="hero-details-container">
                        <div className="ellipse-container">
                            <img src={ellipse1} className="ellipse1" alt="rendahr" />
                            <img src={ellipse2} className="ellipse2" alt="rendahr" />
                            <img src={ellipse3} className="ellipse3" alt="rendahr" />
                        </div>


                        <div className="staff-num">
                            <h2>40,000</h2>
                            <p>Staff Served</p>
                        </div>
                        <div className="divider-container">
                            <div className="divider" style={{ borderLeft: "3px solid black", height: "45px" }}>
                            </div>
                        </div>

                        <div>
                            <h2>$5B</h2>
                            <p>Salaries Disbursed</p>
                        </div>

                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <img src={hero} className="hero-img desktop-view-only" alt="rendahr" />
                    <img src={heromobile} className="hero-img mobile-view-only" alt="rendahr" />
                </div>

            </div>
        </section>
    )
}

export default Hero